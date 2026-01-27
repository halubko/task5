import type { Page } from "@playwright/test";
import { expect, test } from "@playwright/test";
import { describe } from "node:test";
import { FiltersMethods } from "../pageMethods/filtersMethods";

describe("Product Filter Tests", () => {
   test.beforeEach(async ({ page }: { page: Page }) => {
      const pageMethods = new FiltersMethods(page);
      await pageMethods.navigateTo();
   });

   test("Test login", async ({ page }: { page: Page }) => {
      const mainPage = new FiltersMethods(page);
      await mainPage.setSearch("eye");
      await expect(
         page.locator("a").filter({ hasText: "Eyeshadow Palette with Mirror" })
      ).toBeVisible();
   });
});
