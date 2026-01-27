import { describe } from "node:test";
import { CreateOrderMethods } from "../pageMethods/createOrderMethods";
import type { Page } from "@playwright/test";
import { test } from "@playwright/test";

describe("Place Order Tests", () => {
   test.beforeEach(async ({ page }: { page: Page }) => {
      const pageMethods = new CreateOrderMethods(page);
      await pageMethods.navigateTo();
   });

   test("add and go to cart", async ({ page }: { page: Page }) => {
      const mainPage = new CreateOrderMethods(page);
      await mainPage.addToCart();
      await mainPage.goToCart();
      await mainPage.checkCartTitle();
   });
});
