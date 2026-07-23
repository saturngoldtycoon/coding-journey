import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login.js';
import { Inventory } from '../pages/Inventory.js';

test('should successfully log in and add an item to the cart', async ({page}) => {
    const loginPage = new Login(page);
    const inventoryPage = new Inventory(page);

    // 1. Navigate and log in
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');

    // 2. Verify successful login landing
    await expect(inventoryPage.headerTitle).toHaveText('Swag Labs');

    // 3. Add the first item to the cart and verify the cart updates
    await inventoryPage.firstAddToCartButton.click();
    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
});