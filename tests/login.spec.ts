import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login functionality', () => {
  test('should navigate to login page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.clickSignupLogin();
    
    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator('.login-form')).toBeVisible();
    await expect(page.locator('.signup-form')).toBeVisible();
  });

  test('login with invalid credentials should show error', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    
    await homePage.goto();
    await homePage.clickSignupLogin();
    
    await loginPage.login('invalid@test.com', 'wrongpassword');
    
    await expect(page.locator('p[style*="color: red"]')).toContainText('Your email or password is incorrect');
  });
});
