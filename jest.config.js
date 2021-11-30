module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  coverageDirectory: 'coverage',
  // coverageReporters: ['html', 'lcov', 'text'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/main.tsx'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}'
  ],

  transform: {
    '^.+\\.(js|ts|tsx)$': '@sucrase/jest-plugin',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  testMatch: ['<rootDir>/__tests__/**/*.(test|spec).ts?(x)'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules']
}
