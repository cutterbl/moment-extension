module.exports = {
  clearMocks: true,
  //collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      functions: 90,
    },
  },
  rootDir: './src',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
