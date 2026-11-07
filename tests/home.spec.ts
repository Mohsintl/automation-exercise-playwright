import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home page', () => {
  test('should load home page successfully', { tag: '@smoke' }, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    
    await expect(page).toHaveTitle(/Automation Exercise/);
    await expect(homePage.signupLoginLink).toBeVisible();
    await expect(homePage.productsNavLink).toBeVisible();
  });
});
