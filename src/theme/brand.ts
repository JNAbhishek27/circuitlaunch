import { product } from "../config/product.js";

/** Shared visual tokens for the email, landing page, brochure, and launch image. */
export const brandTheme = {
  colors: product.brand.colors,
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    displayFontFamily: "Inter, Arial, sans-serif",
    bodySize: 16,
    smallSize: 13,
    headingScale: [56, 40, 28, 20] as const,
    lineHeight: 1.5,
  },
  layout: {
    contentWidth: 1160,
    emailWidth: 600,
    documentMargin: { top: 42, right: 48, bottom: 42, left: 48 },
    pageGutter: 24,
    cardRadius: 16,
    buttonRadius: 999,
    spacing: [8, 12, 16, 24, 32, 48, 64] as const,
  },
} as const;

export type BrandTheme = typeof brandTheme;
