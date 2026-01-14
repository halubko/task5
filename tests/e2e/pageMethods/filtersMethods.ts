import type { Page } from "@playwright/test";

export class FiltersMethods {
   private page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   async navigateTo(): Promise<void> {
      await this.page.goto("http://localhost:3000");
   }

   async setSearch(searchValue: string) {
      await this.page.getByPlaceholder("Search...").fill(searchValue);
   }
}
