import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  readonly allProductsTitle: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    super(page);
    this.allProductsTitle = page.locator('.title.text-center', { hasText: 'All Products' });
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.productCards = page.locator('.product-image-wrapper');
  }

  async searchProduct(productName: string) {
    await this.page.waitForLoadState('domcontentloaded');
    await this.searchInput.fill(productName);
    await this.searchButton.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async addProductToCart(index: number = 0) {
    await this.page.waitForLoadState('domcontentloaded');
    await this.productCards.nth(index).hover();
    await this.page.locator('.overlay-content .btn').nth(index).click();
  }
}
