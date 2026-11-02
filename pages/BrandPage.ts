import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BrandPage extends BasePage {
  readonly brandsTitle: Locator;
  readonly brandLinks: Locator;

  constructor(page: Page) {
    super(page);
    this.brandsTitle = page.locator('.brands_products h2');
    this.brandLinks = page.locator('.brands-name .nav-stacked a');
  }

  async clickBrand(brandName: string) {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.locator('.brands-name a').filter({ hasText: brandName }).click();
  }

  async getBrandCount() {
    return await this.brandLinks.count();
  }
}
