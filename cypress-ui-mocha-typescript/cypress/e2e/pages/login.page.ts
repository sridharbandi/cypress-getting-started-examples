class LoginPage {

    get txtEmail() { return cy.get('#email') }
    get txtPassword() { return cy.get('#password') }
    get btnLogin() { return cy.contains('Login') }

    openUrl() {
        cy.visit('/forms/')
    }

    login() {
        this.txtEmail.type('test@test.com')
        this.txtPassword.type('Test@123')
        this.btnLogin.click()
    }

}
export default new LoginPage()