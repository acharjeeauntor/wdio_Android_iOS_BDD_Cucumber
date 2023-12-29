export const config = {
  runner: 'local',
  specs: [
    './features/ios/*.feature'
  ],
  capabilities: [{
    "platformName": "ios",
    "appium:platformVersion": "17.2",
    "appium:deviceName": "iPhone 14 Pro",
    "appium:udid":"AEAA1935-E8C6-4183-83CA-2865C5C2F7FE",
    "appium:app":"./app/ios/ExampleApp.app",
    "appium:automationName": "XCUITest",
    'appium:noReset': true,
    'appium:newCommandTimeout': 240,

  }],
  logLevel: 'info',
  framework: 'cucumber',
  cucumberOpts: {
    require: ['./step-definitions/ios/*.steps.ts'],
    timeout: 60000
  },
  services: ['appium'],
  port: 4723,
  path: '/wd/hub',
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
};

