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
  const { itemTemplates } = await server.ssrLoadModule("/src/static/items.ts");
  const errors = [];
  let checkedCount = 0;

  for (const [slot, templates] of Object.entries(itemTemplates)) {
    const seen = new Map();

    for (const template of templates) {
      checkedCount += 1;

      if (seen.has(template.id)) {
        errors.push(
          `${slot}: duplicate id ${template.id} (${seen.get(template.id)} / ${template.name})`
        );
        continue;
      }

      seen.set(template.id, template.name);
    }
  }

  if (errors.length > 0) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(
      `Validated ${checkedCount} item template ids across ${Object.keys(itemTemplates).length} equipment slots.`
    );
  }
} finally {
  await server.close();
}
