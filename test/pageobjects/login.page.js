import Page from './page';


class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get btnSubmit () { return $('.login-form-button'); }

    setLogin  (email) {
        this.inputUsername.setValue(email);
    }

    setPassword(password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton() {
        this.btnSubmit.click();
    }

    open () {
        return super.open('/');
    }
}

export default new LoginPage();

