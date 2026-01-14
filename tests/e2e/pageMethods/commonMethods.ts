import type { Page } from "@playwright/test";

export class CommonMethods {
   protected page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   async navigateTo(): Promise<void> {
      await this.page.goto("http://localhost:3000");
   }
}
