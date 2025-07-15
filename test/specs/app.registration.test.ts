describe('Test the registration form.', () => {
    it('should click sign up.', async () => {
        let signUpButton = $('android=new UiSelector().text("Sign up")');
        await expect(signUpButton).toExist();
        await signUpButton.click();
    });

    it('should confirm the fields in the sign-up form', async () => {
        await Promise.all([
            expect($('android=new UiSelector().description("input-email")')).toExist(),
            expect($('android=new UiSelector().description("input-password")')).toExist(),
            expect($('android=new UiSelector().description("input-repeat-password")')).toExist(),
            expect($('android=new UiSelector().description("button-SIGN UP")')).toExist()
        ]);
    });

    it('should submit a blank form and get form errors.', async () => {
        let signUpButton = $('android=new UiSelector().description("button-SIGN UP")');
        await signUpButton.click();
        
        await Promise.all([
            expect($('android=new UiSelector().text("Please enter a valid email address")')).toExist(),
            expect($('android=new UiSelector().text("Please enter at least 8 characters")')).toExist(),
            expect($('android=new UiSelector().text("Please enter the same password")')).toExist()
        ]);
    });

    it('should enter a valid email address and confirm the warning has cleared.', async () => {
        let emailInput = $('android=new UiSelector().description("input-email")');
        await emailInput.setValue('nonsense@nothing.much');

        let signUpButton = $('android=new UiSelector().description("button-SIGN UP")');
        await signUpButton.click();
        await expect($('android=new UiSelector().text("Please enter a valid email address")')).not.toExist();
    });

    it('should enter a password and confirm the warning has cleared.', async () => {
        let passwordInput = $('android=new UiSelector().description("input-password")');
        await passwordInput.setValue('12345678');

        let signUpButton = $('android=new UiSelector().description("button-SIGN UP")');
        await signUpButton.click();
        await expect($('android=new UiSelector().text("Please enter at least 8 characters")')).not.toExist();
    });

    it('should confirm password and confirm the warning has cleared.', async () => {
        let confirmInput = $('android=new UiSelector().description("input-repeat-password")');
        await confirmInput.setValue('12345678');

        let signUpButton = $('android=new UiSelector().description("button-SIGN UP")');
        await signUpButton.click();
        await expect($('android=new UiSelector().text("Please enter at least 8 characters")')).not.toExist();
    });

    it('should confirm successful sign up.', async () => {
        let successfulMessage = $('android=new UiSelector().text("You successfully signed up!")');
        await expect(successfulMessage).toExist();

        let confirmMessageButton = $('android=new UiSelector().resourceId("android:id/button1")');
        await confirmMessageButton.click();
    });
});