class HomePage {

    get lblDemoText() { return cy.contains('Sample Web Application') }
    get btnLogout() { return cy.contains('Logout') }

    logout() {
        this.btnLogout.click()
    }
}
export default new HomePage()