import { BasePage } from './base.page';

export class LoginPage extends BasePage {
    private usernameInput = '#username';
    private passwordInput = '#password';
    private loginButton = 'button[type="submit"]';
    private errorMessage = '.flash.error'

    async enterUsername(username: string) {
        await this.type(this.usernameInput, username);
    }

    async enterPassword(password: string) {
        await this.type(this.passwordInput, password);
    }

    async clickLoginButton() {
        await this.click(this.loginButton);
    }

    async isErrorVisible(){
        return this.isVisible(this.errorMessage)
    }
}