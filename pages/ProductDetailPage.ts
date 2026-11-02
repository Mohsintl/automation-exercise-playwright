import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailPage extends BasePage {
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly productCategory: Locator;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    super(page);
    this.productName = page.locator('.product-information h2');
    this.productPrice = page.locator('.product-information span span');
    this.productCategory = page.locator('.product-information p').first();
    this.quantityInput = page.locator('#quantity');
    this.addToCartButton = page.locator('.btn.btn-default.cart');
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
  }

  async setQuantity(quantity: string) {
    await this.quantityInput.fill(quantity);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
