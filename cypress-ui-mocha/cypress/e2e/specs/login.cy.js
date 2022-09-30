import loginPage from '../pages/login.page'
import homePage from '../pages/home.page'

describe('Login validation test scenarios', () => {
    it('Valid login test', () => {
        loginPage.openUrl()
        loginPage.login()
        //Validate is login success
        homePage.lblDemoText.should('be.visible')
        homePage.logout()
        //Validate is logout success
        loginPage.txtEmail.should('be.visible')
    })
})