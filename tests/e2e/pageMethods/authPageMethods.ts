import { CommonMethods } from "./commonMethods";

export class AuthPageMethods extends CommonMethods {
   async clickLoginLink() {
      await this.page.getByRole("button", { name: "Log in" }).click();
   }

   async clickLoginButton() {
      await this.page.getByRole("button", { name: "Login" }).click();
   }
}
