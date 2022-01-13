module.exports = {
  setupFilesAfterEnv: ['jest-plugin-context/setup', './jest.setup.js'],
  transformIgnorePatterns: ['/node_modules'],
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
};
