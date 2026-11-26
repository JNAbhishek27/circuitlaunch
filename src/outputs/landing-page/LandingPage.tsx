import { Page } from "@hyper-elements/react";
import { product } from "../../config/product.js";
import { brandTheme } from "../../theme/brand.js";
import {
  ApplicationsSection,
  ContactSection,
  FeaturesSection,
  HeroSection,
  IntroductionSection,
  SiteFooter,
  SiteHeader,
  SpecificationsSection,
} from "../../components/ProductSections.js";

export default function LandingPage() {
  return (
    <Page
      title={`${product.product.name} | ${product.brand.name}`}
      description={product.product.description}
      lang="en"
      width={brandTheme.layout.contentWidth}
      breakpoints={{ mobile: 680 }}
      style={{
        backgroundColor: brandTheme.colors.canvas,
        color: brandTheme.colors.ink,
        fontFamily: brandTheme.typography.fontFamily,
        fontSize: brandTheme.typography.bodySize,
        lineHeight: brandTheme.typography.lineHeight,
        gap: 0,
      }}
    >
      <SiteHeader />
      <HeroSection />
      <IntroductionSection />
      <FeaturesSection />
      <SpecificationsSection />
      <ApplicationsSection />
      <ContactSection />
      <SiteFooter />
    </Page>
  );
}
