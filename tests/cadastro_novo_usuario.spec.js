const { test, expect } = require('@playwright/test')
test('cadastro novo usuario', async ({page}) => {
     await page.goto('/')
     await expect(page).toHaveURL('/')

const link=page.locator('body > div.navbar.navbar-inverse > div > div > a:nth-child(3)')
await expect(link).toHaveText('home')
await link.click()

// Validar tela
await expect(page).toHaveURL(/.*login/)
const Register=page.locator('#app-navbar-collapse > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a')
await Register.click()

// Validar Tela
await expect(page).toHaveURL(/.*register/)
const PainelRegister=page.locator('#app > div > div > div > div > div.panel-heading')
await expect (PainelRegister).toHaveText('Register')

// Preencher formulario
const Name=page.locator('#name')
await Name.fill('Cleyson Alves')

const Company=page.locator('#company')
await Company.fill('Iterasys')


const EMailAddress=page.locator('#email')
await EMailAddress.fill('calves_nascimento@hotmail.com')

const Password=page.locator('#password')
await Password.fill('IterasysFTS145')

const ConfirmPassword=page.locator('#password-confirm')
await ConfirmPassword.fill('IterasysFTS145')

const botao_Register=page.locator('.btn.btn-primary')
await botao_Register.click()

// Validar pagina
await expect(page).toHaveURL(/.*register/)
const MensagemErro=page.locator('body > div > div.code')
await expect (MensagemErro).toHaveText('419')



await page.waitForTimeout(2000)
})