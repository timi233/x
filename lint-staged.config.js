module.exports = {
  '*': 'prettier --write',
  '*.{js,ts,tsx}': 'eslint --fix',
  '*.tsx': 'stylelint --fix',
  '*.d.ts': () => 'dtslint types'
};
