import { createServer } from "vite";

const getUsage = () => `Usage:
  node tools/convertLegacyUrl.mjs '<legacy-url-or-hash>'

Examples:
  node tools/convertLegacyUrl.mjs 'http://localhost:5173/#bl=115&bh=50&...'
  node tools/convertLegacyUrl.mjs '#bl=115&bh=50&...'`;

const convertLegacyUrl = async (input) => {
  if (!input) {
    throw new Error(getUsage());
  }

  const server = await createServer({
    logLevel: "silent",
    server: { middlewareMode: true, hmr: false },
    appType: "custom",
  });

  try {
    const legacyUrl = await server.ssrLoadModule("/src/modules/character/legacyUrl.ts");
    return legacyUrl.convertLegacyUrl(input);
  } finally {
    await server.close();
  }
};

try {
  const input = process.argv[2];
  const converted = await convertLegacyUrl(input);
  console.log(converted);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
