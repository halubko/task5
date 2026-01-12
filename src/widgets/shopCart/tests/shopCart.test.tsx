import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { CartItem } from "@/widgets/shopCart/interfaces/ShopCart";
import ShopCart from "@/widgets/shopCart/ui/ShopCart";

const mockEmptyItems: CartItem[] = [];

vi.mock("@/widgets/shopCart/hooks/useCartActions", () => ({
   useCartActions: () => ({
      items: mockEmptyItems,
      isRemoving: null,
      updateQuantity: vi.fn(),
      removeItem: vi.fn(),
   }),
}));

vi.mock("@/widgets/shopCart/hooks/useSumCalculation", () => ({
   calculateCartTotals: () => ({
      subtotal: 0,
      savings: 0,
      shipping: 0,
      total: 0,
   }),
}));

vi.mock("@/widgets/shopCart/ui/EmptyShopCart", () => ({
   EmptyShopCart: () => <div data-testid="empty-cart">Cart is empty</div>,
}));

vi.mock("@/entities/shopCart/ui/ShopCartItem", () => ({
   ShopCartItem: () => <div data-testid="cart-items">Items list</div>,
}));

vi.mock("@/widgets/shopCart/ui/ShopCartInfo", () => ({
   ShopCartInfo: () => <div data-testid="cart-info">Order summary</div>,
}));

describe("ShopCart", () => {
   it("renders without crashing", async () => {
      const ShopCart = (await import("../ui/ShopCart")).default;

      expect(() => {
         render(<ShopCart />);
      }).not.toThrow();
   });

   it('displays "Your Shopping Cart" title', async () => {
      const ShopCart = (await import("../ui/ShopCart")).default;
      const { container } = render(<ShopCart />);

      expect(container.innerHTML).toContain("Your Shopping Cart");
   });

   it("shows item count and subtotal", async () => {
      // Переопределяем мок для этого теста
      vi.mocked(await import("@/widgets/shopCart/hooks/useCartActions")).useCartActions = vi.fn(
         () => ({
            items: [{ id: "1", name: "Test", price: 50, quantity: 1 }],
            isRemoving: null,
            updateQuantity: vi.fn(),
            removeItem: vi.fn(),
         })
      );

      vi.mocked(await import("@/widgets/shopCart/hooks/useSumCalculation")).calculateCartTotals =
         vi.fn(() => ({
            subtotal: 50,
            savings: 0,
            shipping: 0,
            total: 50,
         }));

      const ShopCart = (await import("../ui/ShopCart")).default;
      const { container } = render(<ShopCart />);

      const html = container.innerHTML;
      expect(html).toContain("1 item");
      expect(html).toContain("$50.00");
   });
});
