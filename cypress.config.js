const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 5000,
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://logistic.hom.kdabra.com.br',
  },
  // We've imported your old cypress plugins here.
  // You may want to clean this up later by importing these.
  setupNodeEvents(on, config) {
    return require('./cypress/plugins/index.js')(on, config)
  },
})
