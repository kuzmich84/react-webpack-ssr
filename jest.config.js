module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
      "\\.(scss)": "identity-obj-proxy"
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]

};