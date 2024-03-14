exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page;
        this.loginLink="#login2";
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginButton = "//button[normalize-space()='Log in']";
    }

    async goToLoginPage(){
        await this.page.goto('http://www.demoblaze.com');
    }

    async login(username, password){
        await this.page.click(this.loginLink);
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }


}