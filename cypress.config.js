const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    openMode: 0,
    runMode: 1
  },
  defaultCommandTimeout: 10000,
  requestTimeout: 5000,
  responseTimeout: 5000,
  waitForAnimations: true,
  keystrokeDelay: 100,
  chromeWebSecurity: true,

  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    baseUrl: 'https://www.amazon.com/',
    specPattern: "**/*.feature",
  },
});
