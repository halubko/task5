import { beforeAll, describe, expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import Header from "@/widgets/header/ui/Header";

vi.mock("next/navigation", () => ({
   useRouter: vi.fn(),
}));

beforeAll(() => {
   Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
         matches: false,
         media: query,
         onchange: null,
         addListener: vi.fn(), // Deprecated
         removeListener: vi.fn(), // Deprecated
         addEventListener: vi.fn(),
         removeEventListener: vi.fn(),
         dispatchEvent: vi.fn(),
      })),
   });
});

const renderWithProviders = (children: ReactElement) => {
   return render(
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
         {children}
      </ThemeProvider>
   );
};

describe("header", () => {
   test("snapshot", () => {
      const { asFragment } = renderWithProviders(<Header />);

      expect(asFragment()).toMatchSnapshot();
   });
});
