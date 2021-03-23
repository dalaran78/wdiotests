import Page from './page';

class LoginPage extends Page {
    get Username () { return $('#normal_login_email'); }
    get Password () { return $('#normal_login_password'); }
    get btnSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message'); }
    get alertMessage () { return $('.ant-form-item-explain-error')}


    open () {
        return super.open('/');
    }

    setLogin  (email) {
        this.Username.setValue(email);
    }

    setPassword(password) {
        this.Password.setValue(password);
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
        this.Username.clearValue();
    }

    passClear() {
        this.Password.clearValue();
    }

    alert() {
        expect(this.alertMessage === 'Required');
    }

    alertEmail() {
        expect(this.alertMessage === '\'email\' is not a valid email');
    }
}

export default new LoginPage();

