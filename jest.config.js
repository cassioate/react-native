module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect"
  ],
  testPathIgnorePatterns: ["node_modules", "/android", "/ios", "/coverage"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.spec.tsx",
    "!src/**/*.test.tsx",
  ],
  coverageReporters: [
    "lcov",
  ]
}
