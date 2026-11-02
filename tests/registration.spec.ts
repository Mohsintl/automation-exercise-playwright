import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';

test.describe('User Registration', () => {
  test('should register a new user', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    
    const timestamp = Date.now();
    const userData = {
      name: 'Test User',
      email: `testuser${timestamp}@test.com`,
      password: 'Test1234',
      day: '15',
      month: '5',
      year: '1990',
      firstName: 'Test',
      lastName: 'User',
      company: 'Test Company',
      address1: '123 Test Street',
      address2: 'Apt 4',
      country: 'India',
      state: 'Maharashtra',
      city: 'Mumbai',
      zipcode: '400001',
      mobileNumber: '1234567890'
    };
    
    await homePage.goto();
    await homePage.clickSignupLogin();
    
    await expect(page).toHaveURL(/.*login/);
    
    await loginPage.signup(userData.name, userData.email);
    
    await expect(page.locator('.login-form h2')).toContainText('Enter Account Information');
    
    await signupPage.fillAccountDetails(userData);
    await signupPage.fillAddressDetails(userData);
    await signupPage.createAccount();
    
    await expect(signupPage.accountCreatedTitle).toBeVisible();
    await expect(page).toHaveURL(/.*account_created/);
    
    await signupPage.continueButton.click();
    await expect(loginPage.logoutLink).toBeVisible();
  });
});
