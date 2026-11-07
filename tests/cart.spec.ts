import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.describe('Shopping Cart', () => {
  test('should add product to cart', { tag: '@smoke' }, async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    
    await homePage.goto();
    await homePage.clickProducts();
    
    await expect(productsPage.allProductsTitle).toBeVisible();
    
    await productsPage.addProductToCart(0);
    
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await homePage.clickCart();
    
    await expect(cartPage.cartTable).toBeVisible();
    const itemCount = await cartPage.getCartItemCount();
    expect(itemCount).toBeGreaterThan(0);
  });

  test('should view cart page', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    
    await homePage.goto();
    await homePage.clickCart();
    
    await expect(page).toHaveURL(/.*view_cart/);
    await expect(page.locator('.breadcrumb')).toBeVisible();
  });
});
