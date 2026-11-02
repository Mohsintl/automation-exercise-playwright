import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';

test.describe('Contact Us Form', () => {
  test('should submit contact form successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const contactPage = new ContactPage(page);
    
    await homePage.goto();
    await page.getByRole('link', { name: ' Contact us' }).click();
    
    await expect(contactPage.getInTouchTitle).toBeVisible();
    await expect(contactPage.getInTouchTitle).toContainText('Get In Touch');
    
    await contactPage.fillContactForm(
      'Test User',
      'test@test.com',
      'Test Subject',
      'This is a test message for automation.'
    );
    
    await contactPage.submitForm();
    
    await expect(contactPage.successMessage).toBeVisible();
    await expect(contactPage.successMessage).toContainText('Success! Your details have been submitted successfully');
  });

  test('should navigate home from contact success page', async ({ page }) => {
    const homePage = new HomePage(page);
    const contactPage = new ContactPage(page);
    
    await homePage.goto();
    await page.getByRole('link', { name: ' Contact us' }).click();
    
    await contactPage.fillContactForm(
      'Test User',
      'test@test.com',
      'Test Subject',
      'This is a test message.'
    );
    
    await contactPage.submitForm();
    await contactPage.homeButton.click();
    
    await expect(page).toHaveURL('https://automationexercise.com/');
  });
});
