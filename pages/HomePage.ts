import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly signupLoginLink: Locator;
  readonly homeNavLink: Locator;
  readonly productsNavLink: Locator;
  readonly cartNavLink: Locator;

  constructor(page: Page) {
    super(page);
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.homeNavLink = page.locator('a[href="/"]').first();
    this.productsNavLink = page.locator('a[href="/products"]');
    this.cartNavLink = page.locator('a[href="/view_cart"]').first();
  }

  async goto() {
    await super.goto('https://automationexercise.com');
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
    await this.handleHeavyLoad();
  }

  async clickProducts() {
    await this.productsNavLink.click();
    await this.handleHeavyLoad();
  }

  async clickCart() {
    await this.cartNavLink.click();
    await this.handleHeavyLoad();
  }
}
