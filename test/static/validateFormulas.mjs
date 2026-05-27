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
  const { DEFAULT_FORMULAS } = await server.ssrLoadModule("/src/static/default-formulas.ts");
  const { validateFormula } = await server.ssrLoadModule("/src/modules/formula/formula-validator.ts");
  const errors = [];

  const formulas = [
    ...Object.entries(DEFAULT_FORMULAS).map(([id, formula]) => ({
      id,
      formula,
    })),
    {
      id: "local-intermediate-agility",
      formula: `
@allAgility = agility + plusAgility + plusAllStatus
@mulAllAgility = (100 + multiplyAgility + multiplyAllStatus) / 100

floor({allAgility} * {mulAllAgility})
`,
    },
    {
      id: "local-intermediate-agility-extra-parens",
      formula: `
@allAgility = agility + plusAgility + plusAllStatus
@mulAllAgility = ((100 + multiplyAgility + multiplyAllStatus) / 100)

floor({allAgility} * {mulAllAgility})
`,
    },
  ];

  for (const { id, formula } of formulas) {
    const result = validateFormula(formula, id);
    if (!result.isValid) {
      errors.push(
        [
          `${id}: invalid formula`,
          ...result.errors.map((error) => `  - [${error.type}] ${error.message}`),
        ].join("\n")
      );
    }
  }

  if (errors.length > 0) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(`Validated ${formulas.length} formulas.`);
  }
} finally {
  await server.close();
}
