import { describe, expect, it, vi } from "vitest";
import { CartItem } from "@/widgets/shopCart/interfaces/ShopCart";
import { fireEvent, render, screen } from "@testing-library/react";

vi.resetModules();

describe("ShopCart - remove product", () => {
   const mockRemoveItem = vi.fn();

   it("calls removeItem when delete button is clicked", async () => {
      vi.doMock("@/widgets/shopCart/hooks/useCartActions", () => ({
         useCartActions: () => ({
            items: [
               {
                  id: "1",
                  name: "Test",
                  color: "Red",
                  size: "M",
                  price: 50,
                  originalPrice: 60,
                  quantity: 1,
                  image: "/test.jpg",
                  estimatedDelivery: "2-3 days",
               } as CartItem,
            ],
            isRemoving: null,
            updateQuantity: vi.fn(),
            removeItem: mockRemoveItem,
         }),
      }));

      vi.doMock("@/widgets/shopCart/hooks/useSumCalculation", () => ({
         calculateCartTotals: () => ({
            subtotal: 50,
            savings: 10,
            shipping: 0,
            total: 50,
         }),
      }));

      vi.doMock("@/entities/shopCart/ui/ShopCartItem", () => ({
         ShopCartItem: ({ removeItem }: (id: string) => void) => (
            <div>
               <button data-testid="delete-btn" onClick={() => removeItem("1")}>
                  Delete
               </button>
            </div>
         ),
      }));

      vi.doMock("@/widgets/shopCart/ui/EmptyShopCart", () => ({
         EmptyShopCart: () => <div>Empty</div>,
      }));

      vi.doMock("@/widgets/shopCart/ui/ShopCartInfo", () => ({
         ShopCartInfo: () => <div>Info</div>,
      }));

      const { default: ShopCartComponent } = await import("../ui/ShopCart");

      render(<ShopCartComponent />);

      const deleteButton = screen.getByTestId("delete-btn");
      fireEvent.click(deleteButton);

      expect(mockRemoveItem).toHaveBeenCalledTimes(1);
      expect(mockRemoveItem).toHaveBeenCalledWith("1");
   });
});
