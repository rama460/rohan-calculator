import { createServer } from "vite";

const installBrowserStub = () => {
  const location = new URL("http://localhost/");
  globalThis.window = {
    location,
    history: {
      state: null,
      replaceState(_state, _title, url) {
        location.href = new URL(url, location.href).href;
      },
      pushState(_state, _title, url) {
        location.href = new URL(url, location.href).href;
      },
    },
    addEventListener() {},
    removeEventListener() {},
  };
};

const createSampleCharacter = (character, itemTemplates, skills, titles) => {
  const buffSkillId = skills.findIndex(
    (skill) => skill.origin === "Self" &&
      skill.attributes?.[0] &&
      Object.keys(skill.attributes[0]).length > 0
  );

  character.base.title = titles[0].name;
  character.statuses.allocated.strength = 10;
  character.statuses.allocated.vitality = 20;
  character.statuses.meta.dexterity = 5;
  character.equipment.weapon = {
    templateId: itemTemplates.weapon[0].id,
    enchantLevel: 1,
    additionalOptions: { plusStrength: 12 },
    craftedOptions: { plusVitality: 7 },
  };

  if (buffSkillId >= 0) {
    character.buffs.Self = [{ skillId: buffSkillId, level: 1 }];
  }

  return character;
};

const formatResult = (name, result) => ({
  name,
  differenceCount: result.differences.length,
  differences: result.differences,
  sample: {
    legacyStrength: result.legacyValues.__strength,
    currentStrength: result.currentValues.__strength,
    legacyHitPoint: result.legacyValues.__hitPoint,
    currentHitPoint: result.currentValues.__hitPoint,
    legacyAttackSpeed: result.legacyValues.__attackSpeed,
    currentAttackSpeed: result.currentValues.__attackSpeed,
  },
});

installBrowserStub();

const server = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
});

try {
  const { createDefaultCharacterState } = await server.ssrLoadModule(
    "/src/modules/character/defaults.ts"
  );
  const { compareLegacyCalculation } = await server.ssrLoadModule(
    "/test/legacy-calculation/compareLegacyCalculation.ts"
  );
  const { itemTemplates } = await server.ssrLoadModule("/src/static/items.ts");
  const { skills } = await server.ssrLoadModule("/src/static/skills/skill.ts");
  const { titles } = await server.ssrLoadModule("/src/static/titles.ts");

  const defaultResult = compareLegacyCalculation(createDefaultCharacterState());
  const sampleResult = compareLegacyCalculation(
    createSampleCharacter(
      createDefaultCharacterState("sample", "Sample"),
      itemTemplates,
      skills,
      titles
    )
  );

  const results = [
    formatResult("default", defaultResult),
    formatResult("sample-equipment-buff", sampleResult),
  ];

  console.log(JSON.stringify(results, null, 2));

  const hasDifference = results.some((result) => result.differenceCount > 0);
  process.exitCode = hasDifference ? 1 : 0;
} finally {
  await server.close();
}

