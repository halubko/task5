import type { Page } from "@playwright/test";
import { test } from "@playwright/test";
import { PageMethods } from "../pageMethods/pageMethods";
import { describe } from "node:test";

describe("Authentication Tests", () => {
   test.beforeEach(async ({ page }: { page: Page }) => {
      const pageMethods = new PageMethods(page);
      await pageMethods.navigateTo();
   });

   test("Test login", async ({ page }: { page: Page }) => {
      const loginPage = new PageMethods(page);
      await loginPage.clickLoginLink();
      await loginPage.clickLoginButton();
   });
});
