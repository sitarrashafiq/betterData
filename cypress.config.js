const { defineConfig } = require('cypress')
//Cypress.config('chromeWebSecurity', false);
module.exports = defineConfig({
  viewportHeight:1000,
  viewportWidth:1920,
  e2e: {
    baseUrl: 'http://af8d2bdc267e54e139a6ccc817f0a8f6-1149838503.ap-southeast-1.elb.amazonaws.com:8080/betterdata/signin/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern:['**/1-getting-started/*','**/2-advanced-examples/*'],
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    video: false,
    screenshotsFolder: "cypress/screenshots",
    browser: "chrome"
  },
})

