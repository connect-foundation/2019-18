module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
      'airbnb',
  ],
    parserOptions:  {
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      sourceType:  'module',  // Allows for the use of imports
    },
    rules:  {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
      'no-console':'warn',
      'no-unused-vars':'warn',
      'no-use-before-define':'warn',
      'semi': [ 'error', 'always' ],
      'quotes':['error', 'single'],
      'space-before-blocks':['error', 'always'],
      'no-unused-vars':'off',
      "@typescript-eslint/no-unused-vars":1,
      "import/no-unresolved": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    },
  };