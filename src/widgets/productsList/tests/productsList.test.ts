import { describe, expect, test } from "vitest";
import { useProductList } from "@/widgets/productsList/store/productList";
import { mockProductsList } from "@/widgets/productsList/data/mockProductsList";
import { act, renderHook } from "@testing-library/react";

describe("Products list store tests", () => {
   test("update products, update skip, reset", () => {
      const { result } = renderHook(() => useProductList());

      act(() => {
         result.current.updateProducts(mockProductsList);
         result.current.updateSkip(20);
         result.current.setStopLoading(true);
      });

      expect(result.current.products.length).toBe(mockProductsList.length);
      expect(result.current.skip).toBe(20);
      expect(result.current.stopLoading).toBe(true);

      act(() => result.current.reset());

      expect(result.current.products.length).toBe(0);
      expect(result.current.skip).toBe(0);
      expect(result.current.stopLoading).toBe(false);
   });
});
