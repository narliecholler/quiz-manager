/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { defaults: tsjPreset } = require('ts-jest/presets')
module.exports = {
  preset: '@shelf/jest-mongodb',
  transform: {
    "^.+\\.{tsx|ts}?$": "ts-jest"
  },
  testEnvironment: 'node',
  testTimeout: 10000
};