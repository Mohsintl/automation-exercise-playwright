import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

test.describe('Product Details', () => {
  test('should view product details', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);
    
    await homePage.goto();
    await homePage.clickProducts();
    
    await page.locator('.product-image-wrapper .choose a').first().click();
    
    await expect(productDetailPage.productName).toBeVisible();
    await expect(productDetailPage.productPrice).toBeVisible();
    await expect(productDetailPage.productCategory).toBeVisible();
  });

  test('should add product to cart from product detail page', async ({ page }) => {
    const homePage = new HomePage(page);
    const productDetailPage = new ProductDetailPage(page);
    
    await homePage.goto();
    await page.locator('.product-image-wrapper .choose a').first().click();
    await page.waitForLoadState('domcontentloaded');
    
    await productDetailPage.setQuantity('3');
    await productDetailPage.addToCart();
    
    await expect(page.locator('.modal-content')).toBeVisible();
    await expect(page.locator('.modal-title')).toContainText('Added!');
    
    await productDetailPage.viewCartLink.click();
    await expect(page).toHaveURL(/.*view_cart/);
  });

  test('should verify product information fields', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    await page.locator('.product-image-wrapper .choose a').nth(1).click();
    await page.waitForLoadState('domcontentloaded');
    
    const productName = page.locator('.product-information h2');
    const availability = page.locator('.product-information p').filter({ hasText: 'Availability' });
    const condition = page.locator('.product-information p').filter({ hasText: 'Condition' });
    const brand = page.locator('.product-information p').filter({ hasText: 'Brand' });
    
    await expect(productName).toBeVisible();
    await expect(availability).toBeVisible();
    await expect(condition).toBeVisible();
    await expect(brand).toBeVisible();
  });
});
