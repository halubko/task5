import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import ShopCart from "@/widgets/shopCart/ui/ShopCart";
import { CartItem } from "@/widgets/shopCart/interfaces/ShopCart";

vi.mock("@/widgets/shopCart/data/mockData", () => ({
   cartData: {
      items: [
         {
            id: "1",
            name: "Classic T-Shirt",
            color: "White",
            size: "M",
            price: 29.99,
            originalPrice: 39.99,
            quantity: 2,
            image: "/tshirt.jpg",
            estimatedDelivery: "3-5 days",
         },
         {
            id: "2",
            name: "Denim Jeans",
            color: "Blue",
            size: "32",
            price: 59.99,
            originalPrice: 69.99,
            quantity: 1,
            image: "/jeans.jpg",
            estimatedDelivery: "5-7 days",
         },
      ] as CartItem[],
   },
}));

vi.mock("@/widgets/shopCart/hooks/useCartActions", () => ({
   useCartActions: () => ({
      items: [
         {
            id: "1",
            name: "Classic T-Shirt",
            color: "White",
            size: "M",
            price: 29.99,
            originalPrice: 39.99,
            quantity: 2,
            image: "/tshirt.jpg",
            estimatedDelivery: "3-5 days",
         },
         {
            id: "2",
            name: "Denim Jeans",
            color: "Blue",
            size: "32",
            price: 59.99,
            originalPrice: 69.99,
            quantity: 1,
            image: "/jeans.jpg",
            estimatedDelivery: "5-7 days",
         },
      ] as CartItem[],
      isRemoving: null,
      updateQuantity: vi.fn(),
      removeItem: vi.fn(),
   }),
}));

vi.mock("@/widgets/shopCart/hooks/useSumCalculation", () => ({
   calculateCartTotals: () => ({
      subtotal: 119.97,
      savings: 20,
      shipping: 0,
      total: 119.97,
   }),
}));

vi.mock("@/entities/shopCart/ui/ShopCartItem", () => ({
   ShopCartItem: () => (
      <div data-testid="shop-cart-items">
         <div>Cart Items Component</div>
      </div>
   ),
}));

vi.mock("@/widgets/shopCart/ui/ShopCartInfo", () => ({
   ShopCartInfo: () => (
      <div data-testid="shop-cart-info">
         <div>Order Summary Component</div>
      </div>
   ),
}));

vi.mock("@/widgets/shopCart/ui/EmptyShopCart", () => ({
   EmptyShopCart: () => (
      <div data-testid="empty-cart">
         <div>Empty Cart Component</div>
      </div>
   ),
}));

describe("ShopCart snapshot", () => {
   it("matches snapshot with items in cart", () => {
      const { container } = render(<ShopCart />);

      expect(container).toMatchSnapshot();

      expect(container.innerHTML).toContain("Your Shopping Cart");
      expect(container.innerHTML).toContain("2 items");
      expect(container.innerHTML).toContain("$119.97");
   });
});
