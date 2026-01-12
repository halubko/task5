import { beforeAll, describe, expect, test } from "vitest";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import AddToCartButton from "@/features/addToCart/ui/AddToCartButton";
import { useShopCartStore } from "@/entities/shopCart/stores/shopCart";
import "@testing-library/jest-dom/vitest";

describe("addToCart", () => {
   beforeAll(() => {
      render(<AddToCartButton productId={1} />);
   });

   test("should add, update, delete cart items", () => {
      const { result } = renderHook(() => useShopCartStore());
      const initButton = screen.getByRole("button");

      fireEvent.click(initButton);

      const counter = screen.getByText("1");
      expect(result.current.cartItems.length).toBe(1);
      expect(counter).toBeInTheDocument();

      const buttons = screen.getAllByRole("button");

      fireEvent.click(buttons[1]);
      expect(result.current.cartItems[0].quantity).toBe(2);
      expect(counter).toHaveTextContent("2");

      fireEvent.click(buttons[0]);
      expect(result.current.cartItems[0].quantity).toBe(1);
      expect(counter).toHaveTextContent("1");

      fireEvent.click(buttons[0]);
      expect(result.current.cartItems.length).toBe(0);
      expect(counter).not.toBeInTheDocument();
   });
});
