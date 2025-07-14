import { $, expect } from '@wdio/globals';

describe('WebdriverIO Demo app for the appium-boilerplate.', () => {
    it('should expect the wdio logo', () => {
        let wdioHomeLogo = $('android=new UiSelector().text("Demo app for the appium-boilerplate")');
        expect(wdioHomeLogo).toExist();
    });
});