import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ShopCartInfo } from "@/widgets/shopCart/ui/ShopCartInfo";
import type { CartItem } from "@/widgets/shopCart/interfaces/ShopCart";

describe("ShopCartInfo", () => {
   const mockEmptyItems: CartItem[] = [];

   it("should render all main sections", () => {
      const { container } = render(<ShopCartInfo items={mockEmptyItems} />);

      const html = container.innerHTML;

      expect(html).toContain("Order Summary");
      expect(html).toContain("Subtotal");
      expect(html).toContain("Shipping");
      expect(html).toContain("Total");
      expect(html).toContain("Proceed to Checkout");

      const button = container.querySelector("button");
      expect(button).toBeTruthy();
      expect(button?.textContent).toContain("Proceed to Checkout");
   });

   it("should disable checkout button for empty cart", () => {
      const { container } = render(<ShopCartInfo items={mockEmptyItems} />);

      const button = container.querySelector("button");
      expect(button?.disabled).toBe(true);
   });
});
