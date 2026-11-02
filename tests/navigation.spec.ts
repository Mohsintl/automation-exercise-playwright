import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Site Navigation', () => {
  test('should navigate to all main sections', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    
    await homePage.clickProducts();
    await expect(page).toHaveURL(/.*products/);
    
    await homePage.clickCart();
    await expect(page).toHaveURL(/.*view_cart/);
    
    await homePage.clickSignupLogin();
    await expect(page).toHaveURL(/.*login/);
    
    await homePage.homeNavLink.click();
    await expect(page).toHaveURL('https://automationexercise.com/');
  });

  test('should navigate to test cases page', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    await page.locator('.navbar-nav a[href="/test_cases"]').click();
    
    await expect(page).toHaveURL(/.*test_cases/);
    await expect(page.locator('.title.text-center')).toContainText('Test Cases');
  });

  test('should navigate to API testing page', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    await page.locator('.navbar-nav a[href="/api_list"]').click();
    
    await expect(page).toHaveURL(/.*api_list/);
    await expect(page.locator('.title.text-center')).toBeVisible();
  });

  test('should scroll to footer and verify subscription', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    await page.locator('#footer').scrollIntoViewIfNeeded();
    
    await expect(page.locator('.single-widget h2').first()).toContainText('Subscription');
    await expect(page.locator('#susbscribe_email')).toBeVisible();
    
    await page.locator('#susbscribe_email').fill('test@example.com');
    await page.locator('#subscribe').click();
    
    await expect(page.locator('.alert-success')).toContainText('You have been successfully subscribed');
  });
});
