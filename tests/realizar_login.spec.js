const { test, expect } = require('@playwright/test')
test('Realizar login', async ({page}) => {

     await page.goto('/')
     await expect(page).toHaveURL('/')

     const link=page.locator('body > div.navbar.navbar-inverse > div > div > a:nth-child(3)')
     await expect(link).toHaveText('home')
     await link.click()

// Validar tela
await expect(page).toHaveURL(/.*login/)
const Login=page.locator('#app > div > div > div > div > div.panel-heading')
await expect(Login).toHaveText('Login')

// prencher Formulario

const EMailAddress=page.locator('#email')
await EMailAddress.fill('calves_nascimento@hotmail.com')

const Password=page.locator('#password')
await Password.fill('IterasysFTS145')

// acrescentei o check - Remember ME
const checkbox=page.locator('#app > div > div > div > div > div.panel-body > form > div:nth-child(4) > div > div > label > input[type=checkbox]')
await checkbox.click()

const botao_login=page.locator('.btn.btn-primary')
await botao_login.click()

// Validar tela
await expect(page).toHaveURL(/.*login/)
const MensagemErro=page.locator('body > div > div.message')
await expect(MensagemErro).toHaveText('Page Expired')


})