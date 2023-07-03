module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:import/typescript', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react-refresh'],
  // ignorePattern:
  //   [
  //     './vite.config.ts',
  //   ],
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx']
    }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function'
    }]
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.json', '.ts', '.tsx']
  }
};