import type { Page } from "@playwright/test";

export class AuthPageMethods {
   private page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   async navigateTo(): Promise<void> {
      await this.page.goto("http://localhost:3000");
   }

   async clickLoginLink() {
      await this.page.getByRole("button", { name: "Log in" }).click();
   }

   async clickLoginButton() {
      await this.page.getByRole("button", { name: "Login" }).click();
   }
}
