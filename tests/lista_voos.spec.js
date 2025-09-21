// biblioteca
const { test, expect } = require('@playwright/test')

test('Lista de voos', async ({page}) => {
     await page.goto('/')
     await expect(page).toHaveURL('/')
     const botao_login = page.locator('input.btn.btn-primary')
     await expect(botao_login).toHaveText('Find Flights')

    // Tive um pouco de dificuldade para entender essa parte
    // Poruqe o site Blaze tem Menu suspenso e já não sua page.Fill

     await page.locator('select[name="fromPort"]')
     await page.selectOption('select[name="fromPort"]', 'Boston' )
     await page.selectOption('select[name="toPort"]', 'Rome' )

     await botao_login.click()

     await expect(page).toHaveURL(/.*reserve/)
     const titulo = page.locator('body > div.container > h3')
     await expect(titulo).toHaveText(/Flights from Boston to Rome:/)

     await page.locator('.btn.btn-small').nth(1).click()
     
     // verificar pagina 

     await expect(page).toHaveURL(/.*purchase/)
     const confirmacaoTela = page.locator('body > div.container > h2')
     await expect(confirmacaoTela).toHaveText(/Your flight from TLV to SFO has been reserved./)
     const preco=page.locator('text=Price: 400') // eu poderia usar esse seletor também ('body > div.container > p:nth-child(4)')
     // mas não é tão seguro como o texto, por ele ser unico.
     await expect(preco).toHaveText('Price: 400')

// Preencher o formulario // colocar const para cada campo
const name=page.locator('#inputName')
await name.fill('Cleyson Alves')

const address=page.locator('#address')
await address.fill('Rua Florença, 96')

const City=page.locator('#city')
await City.fill('Santana de Parnaíba')

const State=page.locator('#state')
await State.fill('São Paulo')

const zipCode=page.locator('#zipCode')
await zipCode.fill('078584-80')

 // nos campos de seleção, dá para puxar a opção desejada direto, inserido o seletor e a opção desejada.
await page.selectOption('#cardType','American Express')

const CreditCardNumber=page.locator('#creditCardNumber')
await CreditCardNumber.fill('251685987412658')

const Month=page.locator('#creditCardMonth')
await Month.fill('08')

const Year=page.locator('#creditCardYear')
await Year.fill('1992')

const NameonCard=page.locator('#nameOnCard')
await NameonCard.fill('Cleyson Nascimento')

const botaoDeComprar=page.locator('input.btn.btn-primary')
await expect(botaoDeComprar).toHaveText('Purchase Flight')
await botaoDeComprar.click()

// verificar pagina

await expect(page).toHaveURL(/.*confirmation/)
const Agradecimento=page.locator('body > div.container > div > h1')    
     const ID=page.locator('body > div.container > div > table > tbody > tr:nth-child(1) > td:nth-child(1)')


})