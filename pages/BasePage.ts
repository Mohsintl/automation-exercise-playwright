import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string = '/') {
    await this.initAdBlocker();
    await this.page.goto(url);
    await this.handleHeavyLoad();
  }

  async handleHeavyLoad() {
    for (let attempt = 0; attempt < 3; attempt++) {
      const isHeavyLoad = await this.page.locator('text=This website is under heavy load').isVisible().catch(() => false);
      if (!isHeavyLoad) break;
      await this.page.waitForTimeout(2000);
      await this.page.reload();
    }
  }

  async initAdBlocker() {
    if ((this.page as any)._adBlockerInitialized) return;
    (this.page as any)._adBlockerInitialized = true;

    await this.page.route('**/*', (route) => {
      const url = route.request().url();
      if (
        url.includes('googleads') ||
        url.includes('googlesyndication') ||
        url.includes('doubleclick') ||
        url.includes('adservice') ||
        url.includes('adsystem') ||
        url.includes('adnxs')
      ) {
        return route.abort();
      }
      return route.continue();
    });

    await this.page.addInitScript(() => {
      (window as any).adsbygoogle = { push: () => {} };
    });
  }

  async getTitle() {
    return await this.page.title();
  }
}
