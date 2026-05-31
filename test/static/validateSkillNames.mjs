import { createServer } from "vite";

const originalStderrWrite = process.stderr.write.bind(process.stderr);
process.stderr.write = (chunk, encoding, callback) => {
  const message = String(chunk);
  if (message.includes("WebSocket server error") && message.includes("0.0.0.0:24678")) {
    if (typeof callback === "function") {
      callback();
    }
    return true;
  }

  return originalStderrWrite(chunk, encoding, callback);
};

const server = await createServer({
  configFile: false,
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
  logLevel: "error",
});

process.stderr.write = originalStderrWrite;

try {
  const { skills } = await server.ssrLoadModule("/src/static/skills/skill.ts");
  const { races } = await server.ssrLoadModule("/src/static/races.ts");
  const duplicates = [];
  const invalidCategories = [];
  const stateManagedCategories = new Set(["Buff", "Passive"]);

  skills.forEach((skill) => {
    if (!Array.isArray(skill.categories) || skill.categories.length === 0) {
      invalidCategories.push(`${skill.name}: categories must be a non-empty array`);
    }
  });

  const validateScope = (label, candidates) => {
    const seen = new Map();

    candidates
      .filter((skill) => skill.categories.some((category) => stateManagedCategories.has(category)))
      .forEach((skill) => {
        const previous = seen.get(skill.name);
        if (previous !== undefined) {
          duplicates.push(`${label}: duplicate ${skill.name} (${previous} / ${skill.displayName})`);
          return;
        }

        seen.set(skill.name, skill.displayName);
      });
  };

  validateScope("Group", skills.filter((skill) => skill.origin === "Group"));
  validateScope("Cash", skills.filter((skill) => skill.origin === "Cash"));
  validateScope("Guild", skills.filter((skill) => skill.origin === "Guild"));

  races.forEach((race, raceid) => {
    race.jobs.forEach((_job, jobid) => {
      validateScope(
        `Self race=${raceid} job=${jobid}`,
        skills.filter(
          (skill) =>
            skill.origin === "Self" &&
            skill.raceid === raceid &&
            (skill.jobid === jobid || skill.jobid === 0)
        )
      );
    });
  });

  const errors = [...invalidCategories, ...duplicates];
  if (errors.length > 0) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
  } else {
    console.log("Validated skill names in buff selection scopes.");
  }
} finally {
  await server.close();
}
