module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["react-app", "airbnb"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
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
      "react/prop-types": 0,
      'react-hooks/exhaustive-deps': 0,
      'no-underscore-dangle':0,
      'no-nested-ternary': 0,
    }

};