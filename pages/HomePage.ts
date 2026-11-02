import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly signupLoginLink: Locator;
  readonly homeNavLink: Locator;
  readonly productsNavLink: Locator;
  readonly cartNavLink: Locator;

  constructor(page: Page) {
    super(page);
    this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
    this.homeNavLink = page.getByRole('link', { name: ' Home' });
    this.productsNavLink = page.getByRole('link', { name: ' Products' });
    this.cartNavLink = page.getByRole('link', { name: ' Cart' });
  }

  async goto() {
    await super.goto('https://automationexercise.com');
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }

  async clickProducts() {
    await this.productsNavLink.click();
  }

  async clickCart() {
    await this.cartNavLink.click();
  }
}
