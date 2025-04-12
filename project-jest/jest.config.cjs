const path = require('path');
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};