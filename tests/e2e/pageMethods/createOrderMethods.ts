import { CommonMethods } from "./commonMethods";

export class CreateOrderMethods extends CommonMethods {
   async addToCart() {
      await this.page.getByRole("button", { name: "Add to Cart" }).nth(2).click();
   }

   async reaseProductQuantity() {
      await this.page.getByRole("button").filter({ hasText: "/^$/" }).nth(2).click();
   }

   async proceedProductQuantity() {
      await this.page.getByRole("button").filter({ hasText: "/^$/" }).nth(1).click();
   }

   async goToCart() {
      await this.page.getByRole("link", { name: "Cart 1" }).click();
   }

   async checkCartTitle() {
      await this.page.getByRole("heading", { name: "Your Shopping Cart" }).isVisible();
   }
}
