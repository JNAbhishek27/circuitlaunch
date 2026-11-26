import {
  Button,
  Column,
  Divider,
  Email,
  Heading,
  Image,
  Link,
  Row,
  Section,
  Span,
  Text,
} from "@hyper-elements/react";
import { product } from "../../config/product.js";
import { brandTheme } from "../../theme/brand.js";

const { colors, layout, typography } = brandTheme;
const emailWidth = layout.emailWidth;

const eyebrowStyle = {
  color: colors.primary,
  fontSize: typography.smallSize,
  fontWeight: 700,
  letterSpacing: 1.3,
  textTransform: "uppercase" as const,
};

const bodyStyle = {
  color: colors.mutedInk,
  fontSize: typography.bodySize,
  lineHeight: typography.lineHeight,
  mobile: { fontSize: 15 },
};

const emailCardStyle = {
  backgroundColor: colors.surface,
  border: { width: 1, style: "solid" as const, color: colors.border },
  borderRadius: 12,
  padding: 22,
  gap: 10,
};

function EmailHeader() {
  return (
    <Section style={{ backgroundColor: colors.canvas, padding: [24, 28] }}>
      <Row style={{ width: "100%", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <Text style={{ color: colors.ink, fontSize: 16, fontWeight: 700 }}>
          {product.brand.name.toUpperCase()}
        </Text>
        <Text style={{ color: colors.mutedInk, fontSize: 11, textAlign: "right" }}>PRODUCT ANNOUNCEMENT / 2026</Text>
      </Row>
    </Section>
  );
}

function ProductHero() {
  return (
    <Section style={{ backgroundColor: colors.canvas, padding: [26, 28, 34], gap: 20 }}>
      <Text style={eyebrowStyle}>Introducing {product.product.name}</Text>
      <Heading level={1} style={{ color: colors.ink, fontSize: 38, lineHeight: 1.1, mobile: { fontSize: 31 } }}>
        {product.campaign.announcementHeadline}
      </Heading>
      <Text style={bodyStyle}>{product.product.shortDescription}</Text>
      <Image
        src={product.product.image}
        alt={product.product.image.alt}
        style={{ width: "100%", borderRadius: 10, border: { width: 1, style: "solid", color: colors.border } }}
      />
      <Text style={{ color: colors.mutedInk, fontSize: 12, textAlign: "center" }}>{product.product.name} · {product.product.category}</Text>
    </Section>
  );
}

function BenefitList() {
  return (
    <Section style={{ backgroundColor: colors.canvas, padding: [12, 28, 34], gap: 16 }}>
      <Heading level={2} style={{ color: colors.ink, fontSize: 23, mobile: { fontSize: 21 } }}>{product.campaign.emailBenefitsHeading}</Heading>
      <Column style={{ gap: 12 }}>
        {product.product.features.map((benefit, index) => (
          <Column key={benefit} style={emailCardStyle}>
            <Text style={{ color: colors.primary, fontSize: 11, fontWeight: 700 }}>0{index + 1} / BENEFIT</Text>
            <Heading level={3} style={{ color: colors.ink, fontSize: 17, lineHeight: 1.3 }}>{benefit}</Heading>
            <Text style={{ ...bodyStyle, fontSize: 14 }}>{product.product.benefitDescriptions[index]}</Text>
          </Column>
        ))}
      </Column>
    </Section>
  );
}

function TechnicalHighlights() {
  return (
    <Section style={{ backgroundColor: colors.surface, padding: [28, 28], gap: 16 }}>
      <Text style={eyebrowStyle}>At a glance</Text>
      <Heading level={2} style={{ color: colors.ink, fontSize: 22 }}>{product.campaign.emailTechnicalHeading}</Heading>
      <Column style={{ gap: 0 }}>
        {product.product.specifications.map((spec, index) => (
          <Column
            key={spec.label}
            style={{
              gap: 0,
              padding: [13, 0],
              border: index < product.product.specifications.length - 1
                ? { bottom: { width: 1, style: "solid", color: colors.border } }
                : undefined,
            }}
          >
            <Row style={{ justifyContent: "space-between", gap: 16 }}>
              <Text style={{ color: colors.ink, fontSize: 14 }}>{spec.label}</Text>
              <Text style={{ color: colors.ink, fontSize: 14, fontWeight: 600, textAlign: "right" }}>{spec.value}</Text>
            </Row>
          </Column>
        ))}
      </Column>
    </Section>
  );
}

function CallToAction() {
  return (
    <Section style={{ backgroundColor: colors.primaryDeep, padding: [30, 28], gap: 14, alignItems: "center" }}>
      <Heading level={2} style={{ color: colors.ink, fontSize: 24, textAlign: "center", mobile: { fontSize: 21 } }}>
        Bring intelligence closer.
      </Heading>
      <Text style={{ ...bodyStyle, textAlign: "center", fontSize: 14 }}>
        Get updates and early access details for {product.product.name}.
      </Text>
      <Button
        href={product.product.callToActionUrl}
        style={{
          backgroundColor: colors.primary,
          color: colors.primaryForeground,
          borderRadius: layout.buttonRadius,
          padding: [15, 22],
          fontSize: 14,
          fontWeight: 700,
          textAlign: "center",
          hover: { backgroundColor: colors.accent },
          mobile: { width: "100%" },
        }}
      >
        {product.product.callToAction}
      </Button>
      <Text style={{ color: colors.mutedInk, fontSize: 11, textAlign: "center" }}>A simple note of interest. No obligation.</Text>
    </Section>
  );
}

function EmailFooter() {
  return (
    <Section style={{ backgroundColor: colors.canvas, padding: [24, 28], gap: 14 }}>
      <Divider style={{ borderTop: { width: 1, style: "solid", color: colors.border } }} />
      <Text style={{ color: colors.ink, fontSize: 13, fontWeight: 700 }}>{product.brand.name}</Text>
      <Text style={{ color: colors.ink, fontSize: 12, lineHeight: 1.5 }}>
        {product.brand.tagline} Questions about {product.product.name}? Contact our team at{" "}
        <Link href={`mailto:${product.brand.contactEmail}`} style={{ color: colors.primary, fontSize: 12 }}>{product.brand.contactEmail}</Link>.
      </Text>
      <Link href={product.brand.website} style={{ color: colors.primary, fontSize: 12 }}>Visit {product.brand.name}</Link>
      <Text style={{ color: colors.mutedInk, fontSize: 11 }}>{product.brand.postalAddress} · © 2026 {product.brand.name}</Text>
    </Section>
  );
}

export default function LaunchEmail() {
  return (
    <Email
      title={product.campaign.emailSubject}
      previewText={product.campaign.emailPreview}
      lang="en"
      width={emailWidth}
      style={{
        backgroundColor: colors.canvas,
        color: colors.ink,
        fontFamily: typography.fontFamily,
        fontSize: typography.bodySize,
        lineHeight: typography.lineHeight,
        gap: 0,
        mobile: { gap: 0 },
      }}
    >
      <EmailHeader />
      <ProductHero />
      <BenefitList />
      <TechnicalHighlights />
      <CallToAction />
      <EmailFooter />
    </Email>
  );
}
