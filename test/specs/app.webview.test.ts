//import { $, expect } from '@wdio/globals';

describe('Navigate to the Webview, get the context, switch to the Webview and navigate the webview.', () => {
    it('should navigate to the webview and wait for the LOADING... message to disappear.', async () => {
        let navigationView = $('android=new UiSelector().className("android.view.View").instance(0)');
        let webViewLink = navigationView.$('android=new UiSelector().description("Webview")');
        await webViewLink.click();

        let loadingMessage = $('android=new UiSelector().text("LOADING...")');
        await expect(loadingMessage).toExist();
        await expect(loadingMessage).not.toExist();
    });

    it('should switch to the webview context and confirm web element in wdio homepage', async () => {
        await expect((await driver.getContexts()).length).toEqual(2);
        await driver.switchContext('WEBVIEW_com.wdiodemoapp');
        await expect($('header div h1.hero__title')).toExist();
    });
});