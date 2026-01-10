import { describe, expect, test } from "vitest";
import { formatDate } from "@/entities/product/utils/formatters";

describe("formatters", () => {
   test("should return date (numeric:long:numeric)", () => {
      const mockDate = "2024-05-23T08:56:21.618Z";

      const resalt = formatDate(mockDate);

      expect(resalt).toBe("May 23, 2024");
   });
});
