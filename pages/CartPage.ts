import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartTable: Locator;
  readonly cartItems: Locator;
  readonly proceedToCheckout: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.cartTable = page.locator('#cart_info_table');
    this.cartItems = page.locator('#cart_info_table tbody tr');
    this.proceedToCheckout = page.locator('.btn.btn-default.check_out');
    this.emptyCartMessage = page.locator('#empty_cart');
  }

  async getCartItemCount() {
    return await this.cartItems.count();
  }
}
