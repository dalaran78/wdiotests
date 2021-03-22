import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get clearUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get clearPassword () { return $('#normal_login_password'); }
    get btnSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message'); }
    get alertMessage () { return $('.ant-form-item-explain-error')}


    open () {
        return super.open('/');
    }

    setLogin  (email) {
        this.inputUsername.setValue(email);
    }

    setPassword(password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton() {
        this.btnSubmit.click();
    }

    isDisabled() {
        expect(this.btnSubmit).toBeDisabled();
    }

    errorToastAppeared() {
        expect(this.errorToast).toBeDisplayed();
    }

    loginClear() {
        this.clearUsername.clearValue();
    }

    passClear() {
        this.clearPassword.clearValue();
    }

    alert() {
        expect(this.alertMessage === 'Required');
    }

    alertEmail() {
        expect(this.alertMessage === '\'email\' is not a valid email');
    }
}

export default new LoginPage();

