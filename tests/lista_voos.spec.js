const { test, expect } = require('@playwright/test')

test('Lista de voos', async ({page}) => {
     await page.goto('https://www.blazedemo.com')
     await expect(page).toHaveURL('https://www.blazedemo.com')
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
     

    await page.waitForTimeout(3000)
})