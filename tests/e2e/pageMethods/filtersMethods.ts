import { CommonMethods } from "./commonMethods";

export class FiltersMethods extends CommonMethods {
   async setSearch(searchValue: string) {
      await this.page.getByPlaceholder("Search...").fill(searchValue);
   }
}
