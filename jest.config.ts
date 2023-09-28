import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  extensionsToTreatAsEsm: [".ts"],
  verbose: true,
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)?$": ["ts-jest", { useESM: true }],
  },
  testPathIgnorePatterns: ["./dist"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testTimeout: 30000,
  globals: {
    DATABASE_URL:
      "postgresql://your_db_user:your_db_password@localhost:5432/your_db_name",
  },
};

export default config;
