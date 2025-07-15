describe('WebdriverIO Demo app for the appium-boilerplate.', () => {
    it('should expect the wdio logo', async () => {
        let wdioHomeLogo = $('android=new UiSelector().text("Demo app for the appium-boilerplate")');
        expect(wdioHomeLogo).toExist();
    });

    it('should expect the navigation options', async () => {
        let navigationView = $('android=new UiSelector().className("android.view.View").instance(0)');

        await Promise.all([
            expect(navigationView.$('android=new UiSelector().description("Home")')).toExist(),
            expect(navigationView.$('android=new UiSelector().description("Webview")')).toExist(),
            expect(navigationView.$('android=new UiSelector().description("Login")')).toExist(),
            expect(navigationView.$('android=new UiSelector().description("Forms")')).toExist(),
            expect(navigationView.$('android=new UiSelector().description("Swipe")')).toExist(),
            expect(navigationView.$('android=new UiSelector().description("Drag")')).toExist()
        ]);
        
    });
});