import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach( () => {
        LoginPage.open();
        browser.execute('window.localStorage.clear()');
        browser.refresh();
    });

    it('TC-001 | User login with valid data', () => {
        LoginPage.setLogin('fewodes573@990ys.com');
        LoginPage.setPassword('qwerty');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('TC-002 | Submit button should be disabled when input fields are empty', () => {
        LoginPage.isDisabled();
    });

    it('TC-003 | Auth should be failed after invalid data provided', () => {
        LoginPage.setLogin('test@test.com');
        LoginPage.setPassword('qwerty');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it('TC-004 | "Required" alert should appear under Login field when input data is cleared', () => {
        LoginPage.setLogin('test@test.com');
        LoginPage.loginClear();
        LoginPage.alert();
    });

    it('TC-005 | "Required" alert should appear under Password field when input data is cleared', () => {
        LoginPage.setPassword('qwerty');
        LoginPage.passClear();
        LoginPage.alert();
    });

    it('TC-006 | "\'email\' is not a valid email" alert should appear under Login field when wrong value entered', () => {
        LoginPage.setLogin('fewodes573990ys.com');
        LoginPage.alertEmail();
    });

    afterEach( () => {
        browser.execute('window.localStorage.clear()');
    });
});




