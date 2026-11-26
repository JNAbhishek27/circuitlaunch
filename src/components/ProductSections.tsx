import {
  Button,
  Column,
  Divider,
  Grid,
  Heading,
  Image,
  Link,
  Row,
  Section,
  Span,
  Text,
} from "@hyper-elements/react";
import { product } from "../config/product.js";
import { brandTheme } from "../theme/brand.js";

const { colors, layout, typography } = brandTheme;
const wordmark = product.brand.name.toUpperCase();
const eyebrowStyle = {
  color: colors.accent,
  fontSize: typography.smallSize,
  fontWeight: 700,
  letterSpacing: 1.6,
  textTransform: "uppercase" as const,
};
const mutedStyle = { color: colors.mutedInk, lineHeight: typography.lineHeight };
const cardStyle = {
  backgroundColor: colors.surface,
  border: { width: 1, style: "solid" as const, color: colors.border },
  borderRadius: layout.cardRadius,
  padding: 24,
  gap: 14,
};

export function SiteHeader() {
  return (
    <Section style={{ backgroundColor: colors.canvas, padding: [22, layout.pageGutter] }}>
      <Row style={{ maxWidth: layout.contentWidth, width: "100%", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <Text style={{ color: colors.ink, fontSize: 18, fontWeight: 700 }}>
          {wordmark}
        </Text>
        <Row style={{ gap: 24, alignItems: "center", mobile: { gap: 12 } }}>
          <Link href="#features" style={{ color: colors.mutedInk, fontSize: 14 }}>Features</Link>
          <Link href="#specifications" style={{ color: colors.mutedInk, fontSize: 14 }}>Specifications</Link>
          <Button
            href={product.product.callToActionUrl}
            style={{ backgroundColor: colors.primary, color: colors.primaryForeground, borderRadius: layout.buttonRadius, padding: [12, 18], fontSize: 13, fontWeight: 700, hover: { backgroundColor: colors.accent }, mobile: { padding: [10, 12], fontSize: 11 } }}
          >
            Get early access
          </Button>
        </Row>
      </Row>
    </Section>
  );
}

export function HeroSection() {
  return (
    <Section style={{ backgroundColor: colors.canvas, padding: [72, layout.pageGutter, 80], gap: 48 }}>
      <Row style={{ maxWidth: layout.contentWidth, width: "100%", alignItems: "center", gap: 48, mobile: { gap: 30 } }}>
        <Column style={{ flex: 1, gap: 24 }}>
          <Text style={eyebrowStyle}>The edge, reimagined · {product.product.category}</Text>
          <Heading level={1} style={{ color: colors.ink, fontSize: 58, lineHeight: 1.05, mobile: { fontSize: 40 } }}>
            {product.campaign.announcementHeadline}
          </Heading>
          <Text style={{ ...mutedStyle, fontSize: 18, maxWidth: 520, mobile: { fontSize: 16 } }}>
            {product.product.description}
          </Text>
          <Row style={{ gap: 14, alignItems: "center", mobile: { gap: 10 } }}>
            <Button href={product.product.callToActionUrl} style={{ backgroundColor: colors.primary, color: colors.primaryForeground, borderRadius: layout.buttonRadius, padding: [16, 24], fontSize: 15, fontWeight: 700, hover: { backgroundColor: colors.accent } }}>
              {product.product.callToAction}
            </Button>
            <Link href="#features" style={{ color: colors.ink, fontSize: 14, fontWeight: 600, mobile: { fontSize: 12 } }}>Explore the platform →</Link>
          </Row>
          <Text style={{ color: colors.mutedInk, fontSize: 12 }}>Designed for the places where your data is made.</Text>
        </Column>
        <Column style={{ flex: 1, gap: 14, alignItems: "center" }}>
          <Image src={{ src: product.product.image.localSrc ?? product.product.image.src, width: product.product.image.width, height: product.product.image.height }} alt={product.product.image.alt} style={{ width: "100%", maxWidth: 540, borderRadius: layout.cardRadius, border: { width: 1, style: "solid", color: colors.border } }} />
          <Text style={{ color: colors.mutedInk, fontSize: 12, textAlign: "center" }}>{product.product.name} · {product.product.category}</Text>
        </Column>
      </Row>
    </Section>
  );
}

export function IntroductionSection() {
  return (
    <Section style={{ backgroundColor: colors.primaryDeep, padding: [48, layout.pageGutter], gap: 20, alignItems: "center" }}>
      <Text style={eyebrowStyle}>Built for the moments that matter</Text>
      <Heading level={2} style={{ color: colors.ink, fontSize: 34, textAlign: "center", mobile: { fontSize: 28 } }}>
        {product.campaign.productIntroduction}
      </Heading>
      <Text style={{ ...mutedStyle, maxWidth: 760, textAlign: "center" }}>
        {product.campaign.productIntroduction}
      </Text>
    </Section>
  );
}

export function FeaturesSection() {
  return (
    <Section id="features" style={{ backgroundColor: colors.canvas, padding: [76, layout.pageGutter], gap: 34 }}>
      <Column style={{ maxWidth: layout.contentWidth, width: "100%", gap: 12 }}>
        <Text style={eyebrowStyle}>Purpose-built at the edge</Text>
        <Heading level={2} style={{ color: colors.ink, fontSize: 38, mobile: { fontSize: 30 } }}>{product.campaign.landingFeatureHeading}</Heading>
      </Column>
      <Grid columns={3} style={{ maxWidth: layout.contentWidth, width: "100%", gap: 16, rowGap: 16 }}>
        {product.product.features.map((feature, index) => (
          <Column key={feature} style={cardStyle}>
            <Text style={{ color: colors.primary, fontSize: 13, fontWeight: 700 }}>0{index + 1} / CAPABILITY</Text>
            <Heading level={3} style={{ color: colors.ink, fontSize: 20, lineHeight: 1.25 }}>{feature}</Heading>
            <Text style={mutedStyle}>{product.product.benefitDescriptions[index]}</Text>
          </Column>
        ))}
      </Grid>
    </Section>
  );
}

export function SpecificationsSection() {
  return (
    <Section id="specifications" style={{ backgroundColor: colors.surface, padding: [72, layout.pageGutter], gap: 34 }}>
      <Row style={{ maxWidth: layout.contentWidth, width: "100%", gap: 48, alignItems: "start" }}>
        <Column style={{ flex: 1, gap: 14 }}>
          <Text style={eyebrowStyle}>The details</Text>
          <Heading level={2} style={{ color: colors.ink, fontSize: 38, mobile: { fontSize: 30 } }}>Small footprint. Serious capability.</Heading>
          <Text style={mutedStyle}>A thoughtfully sized gateway for demanding environments and practical deployments.</Text>
        </Column>
        <Column style={{ flex: 1, gap: 0 }}>
          {product.product.specifications.map((spec, index) => (
            <Column key={spec.label} style={{ gap: 0, padding: [16, 0], border: index < product.product.specifications.length - 1 ? { bottom: { width: 1, style: "solid", color: colors.border } } : undefined }}>
              <Row style={{ justifyContent: "space-between", gap: 20 }}>
                <Text style={mutedStyle}>{spec.label}</Text>
                <Text style={{ color: colors.ink, fontWeight: 600, textAlign: "right" }}>{spec.value}</Text>
              </Row>
            </Column>
          ))}
        </Column>
      </Row>
    </Section>
  );
}

export function ApplicationsSection() {
  return (
    <Section style={{ backgroundColor: colors.canvas, padding: [72, layout.pageGutter], gap: 30 }}>
      <Column style={{ maxWidth: layout.contentWidth, width: "100%", gap: 12 }}>
        <Text style={eyebrowStyle}>Made for the real world</Text>
        <Heading level={2} style={{ color: colors.ink, fontSize: 38, mobile: { fontSize: 30 } }}>{product.campaign.landingApplicationHeading}</Heading>
      </Column>
      <Grid columns={3} style={{ maxWidth: layout.contentWidth, width: "100%", gap: 16 }}>
        {product.applications.map((application) => (
          <Column key={application.title} style={{ ...cardStyle, backgroundColor: colors.canvas, borderRadius: 12 }}>
            <Text style={{ color: colors.primary, fontSize: 22 }}>◈</Text>
            <Heading level={3} style={{ color: colors.ink, fontSize: 20 }}>{application.title}</Heading>
            <Text style={mutedStyle}>{application.detail}</Text>
          </Column>
        ))}
      </Grid>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section style={{ backgroundColor: colors.primaryDeep, padding: [56, layout.pageGutter], gap: 18, alignItems: "center" }}>
      <Text style={eyebrowStyle}>Get closer to your data</Text>
      <Heading level={2} style={{ color: colors.ink, fontSize: 36, textAlign: "center", mobile: { fontSize: 30 } }}>{product.campaign.landingContactHeading}</Heading>
      <Text style={{ ...mutedStyle, textAlign: "center", maxWidth: 620 }}>Join the early access list and be among the first to explore {product.product.name}.</Text>
      <Button href={product.product.callToActionUrl} style={{ backgroundColor: colors.primary, color: colors.primaryForeground, borderRadius: layout.buttonRadius, padding: [16, 24], fontSize: 15, fontWeight: 700, hover: { backgroundColor: colors.accent } }}>
        {product.product.callToAction}
      </Button>
    </Section>
  );
}

export function SiteFooter() {
  return (
    <Section style={{ backgroundColor: colors.canvas, padding: [28, layout.pageGutter], gap: 18 }}>
      <Column style={{ maxWidth: layout.contentWidth, width: "100%", gap: 18 }}>
        <Divider style={{ borderTop: { width: 1, style: "solid", color: colors.border } }} />
        <Row style={{ justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <Text style={{ color: colors.mutedInk, fontSize: 13 }}>© 2026 {product.brand.name}. {product.brand.tagline}</Text>
          <Link href={`mailto:${product.brand.contactEmail}`} style={{ color: colors.primary, fontSize: 13 }}>{product.brand.contactEmail}</Link>
        </Row>
      </Column>
    </Section>
  );
}
