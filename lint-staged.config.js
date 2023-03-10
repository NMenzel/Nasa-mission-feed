// lint-staged.config.js
//only runs scripts based on the files type
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc -p tsconfig.json --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}

// ignore: [
//   '**/__tests__/**',
//   '**/*.test.js',

//   '**/cypress/**',
//   '**/node_modules/**',

//   '**/.eslintrc.json',
//   '**/.prettierrc.json',
//   '**/.package.json',

//   '**/*.config.js',
//   '**/*.setup.js',
// ],
