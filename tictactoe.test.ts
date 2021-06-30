import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(500);
});

test('Select top left square', async () => {
    let cell1 = await (await driver).findElement(By.id('cell-0'));
    await cell1.click();
    await driver.sleep(1000);
})

test('Select middle square', async () => {
    let cell2 = await (await driver).findElement(By.id('cell-4'));
    await cell2.click();
    await driver.sleep(1000);
})

test('Select bottom right square', async () => {
    let cell3 = await (await driver).findElement(By.id('cell-8'));
    await cell3.click();
    await driver.sleep(1000);
})