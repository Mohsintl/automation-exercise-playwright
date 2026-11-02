import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Category Navigation', () => {
  test('should display categories sidebar', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    
    await expect(page.locator('.left-sidebar h2').first()).toContainText('Category');
    await expect(page.locator('.panel-group.category-products')).toBeVisible();
  });

  test('should filter products by women category', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    
    await page.locator('a[href="#Women"]').click();
    await page.locator('a[href="/category_products/1"]').click();
    
    await expect(page.locator('.title.text-center')).toContainText('Women - Dress Products');
    await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
  });

  test('should filter products by men category', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    
    await page.locator('a[href="#Men"]').click();
    await page.locator('a[href="/category_products/3"]').click();
    
    await expect(page.locator('.title.text-center')).toContainText('Men - Tshirts Products');
  });

  test('should filter products by kids category', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    
    await page.locator('a[href="#Kids"]').click();
    await page.locator('a[href="/category_products/4"]').click();
    
    await expect(page.locator('.title.text-center')).toContainText('Kids - Dress Products');
  });
});
