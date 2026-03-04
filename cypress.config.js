const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    env: {
      URL_LOGIN: process.env.URL_LOGIN,
    },
  },
});