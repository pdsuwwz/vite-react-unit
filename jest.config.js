module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  coverageDirectory: 'coverage',
  // coverageReporters: ['html', 'lcov', 'text'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/main.tsx',
    '^.+\\.d.ts'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}'
  ],

  transform: {
    // TODO: Does not support import.meta.env
    // '^.+\\.(js|ts|tsx)$': '@sucrase/jest-plugin',
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  testMatch: ['<rootDir>/__tests__/**/*.(test|spec).ts?(x)'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules']
}
