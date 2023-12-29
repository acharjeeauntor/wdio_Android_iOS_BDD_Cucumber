export const config = {
  runner: "local",
  specs: ["./features/android/*.feature"],
  capabilities: [
    {
      platformName: "Android",
      "appium:platformVersion": "12.0",
      "appium:deviceName": "Pixel-5-test",
      "appium:automationName": "UIAutomator2",
      "appium:app": "./app/android/sample-debug.apk",
      "appium:autoGrantPermissions": true,
      "appium:noReset": true,
      "appium:newCommandTimeout": 240,
    },
  ],
  logLevel: "info",
  framework: "cucumber",
  cucumberOpts: {
    require: ["./step-definitions/android/*.steps.ts"],
    timeout: 60000,
  },
  services: ["appium"],
  port: 4723,
  path: "/wd/hub",
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
};