module.exports = {
  "root": true,
  "env": {
      "browser": true,
      "amd": true,
      "es6": true,
      "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/essential"
  ],
  "parserOptions": {
      "sourceType": "module",
      "parser": "babel-eslint"
  },
  "rules": {
      "indent": [
          "error",
          2,
          { "SwitchCase": 1 }
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
        "error",
        "single",
        { "allowTemplateLiterals": true }
      ],
      "prettier/prettier": [
          "error", {
              "singleQuote": true,
              "trailingComma": "es5"
          },
      ],
      "no-console": "off",
  }
};
