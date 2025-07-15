describe('Test the login form.', () => {
    it('should click login', async () => {
        let loginButton = $('android=new UiSelector().text("Login")');
        await loginButton.click();
    });

    it('should confirm the fields in the login form and clear the values', async () => {
        await Promise.all([
            expect($('android=new UiSelector().description("input-email")')).toExist(),
            expect($('android=new UiSelector().description("input-password")')).toExist(),

            $('android=new UiSelector().description("input-email")').clearValue(),
            $('android=new UiSelector().description("input-password")').clearValue(),
        ]);
    });

    it('should submit a blank form and get form errors.', async () => {
        let loginButton = $('android=new UiSelector().description("button-LOGIN")');
        await loginButton.click();
        
        await Promise.all([
            expect($('android=new UiSelector().text("Please enter a valid email address")')).toExist(),
            expect($('android=new UiSelector().text("Please enter at least 8 characters")')).toExist()
        ]);
    });

    it('should enter a valid email address and confirm the warning has cleared.', async () => {
        let emailInput = $('android=new UiSelector().description("input-email")');
        await emailInput.setValue('nonsense@nothing.much');

        let loginButton = $('android=new UiSelector().description("button-LOGIN")');
        await loginButton.click();
        await expect($('android=new UiSelector().text("Please enter a valid email address")')).not.toExist();
    });

    it('should enter a password and confirm the warning has cleared.', async () => {
        let passwordInput = $('android=new UiSelector().description("input-password")');
        await passwordInput.setValue('12345678');

        let loginButton = $('android=new UiSelector().description("button-LOGIN")');
        await loginButton.click();
        await expect($('android=new UiSelector().text("Please enter at least 8 characters")')).not.toExist();
    });

    it('should confirm successful login.', async () => {
        let successfulMessage = $('android=new UiSelector().text("You are logged in!")');
        await expect(successfulMessage).toExist();

        let confirmMessageButton = $('android=new UiSelector().resourceId("android:id/button1")');
        await confirmMessageButton.click();
    });
});