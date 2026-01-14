import type { Page } from "@playwright/test";
import { test } from "@playwright/test";
import { describe } from "node:test";
import { AuthPageMethods } from "../pageMethods/authPageMethods";

describe("Authentication Tests", () => {
   test.beforeEach(async ({ page }: { page: Page }) => {
      const pageMethods = new AuthPageMethods(page);
      await pageMethods.navigateTo();
   });

   test("Test login", async ({ page }: { page: Page }) => {
      const loginPage = new AuthPageMethods(page);
      await loginPage.clickLoginLink();
      await loginPage.clickLoginButton();
   });
});
