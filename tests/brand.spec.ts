import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { BrandPage } from '../pages/BrandPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Brand Navigation', () => {
  test('should display brands on products page', async ({ page }) => {
    const homePage = new HomePage(page);
    const brandPage = new BrandPage(page);
    
    await homePage.goto();
    await homePage.clickProducts();
    
    await expect(brandPage.brandsTitle).toBeVisible();
    await expect(brandPage.brandsTitle).toContainText('Brands');
    
    const brandCount = await brandPage.getBrandCount();
    expect(brandCount).toBeGreaterThan(0);
  });

  test('should filter products by brand', async ({ page }) => {
    const homePage = new HomePage(page);
    const brandPage = new BrandPage(page);
    
    await homePage.goto();
    await homePage.clickProducts();
    
    await brandPage.clickBrand('Polo');
    
    await expect(page.locator('.title.text-center')).toContainText('Brand - Polo Products');
    await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
  });

  test('should navigate between different brands', async ({ page }) => {
    const homePage = new HomePage(page);
    const brandPage = new BrandPage(page);
    
    await homePage.goto();
    await homePage.clickProducts();
    
    await brandPage.clickBrand('H&M');
    await expect(page.locator('.title.text-center')).toContainText('Brand - H&M Products');
    
    await brandPage.clickBrand('Madame');
    await expect(page.locator('.title.text-center')).toContainText('Brand - Madame Products');
  });
});
