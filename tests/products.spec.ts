import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Products functionality', () => {
  test('should display all products', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    
    await homePage.goto();
    await homePage.clickProducts();
    
    await expect(productsPage.allProductsTitle).toBeVisible();
    await expect(productsPage.productCards.first()).toBeVisible();
  });

  test('should search for a product', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    
    await homePage.goto();
    await homePage.clickProducts();
    
    await productsPage.searchProduct('dress');
    await expect(page.locator('.title.text-center')).toContainText('Searched Products');
    await expect(productsPage.productCards.first()).toBeVisible();
  });
});
