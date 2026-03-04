import { defineConfig } from "cypress";
import "dotenv/config";

export default defineConfig({
  e2e: {
    env: {
      URL_LOGIN: process.env.URL_LOGIN,
      USERNAME: process.env.USERNAME,
      PASSWORD: process.env.PASSWORD,
    },
  },
});
