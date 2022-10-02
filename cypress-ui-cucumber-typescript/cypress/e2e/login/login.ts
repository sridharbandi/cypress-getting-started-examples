import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from '../pages/login.page'
import homePage from '../pages/home.page'

Given("user is on login", () => {
    loginPage.openUrl()
})

When('user login with valid credentails', () => {
    loginPage.login()
})

Then('user sees login success page', () => {
    homePage.lblDemoText.should('be.visible')
})

When('user logout of the application', () => {
    homePage.logout()
})

Then('user sees login page', () => {
    loginPage.txtEmail.should('be.visible')
})

