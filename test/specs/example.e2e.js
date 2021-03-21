import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';

describe('Auth', () => {
    it('User login with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('fewodes573@990ys.com');
        LoginPage.setPassword('qwerty');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});



