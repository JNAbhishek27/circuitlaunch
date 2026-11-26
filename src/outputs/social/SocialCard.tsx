import {
  Canvas,
  Column,
  Heading,
  Row,
  Span,
  Text,
} from "@hyper-elements/react";
import { product } from "../../config/product.js";
import { brandTheme } from "../../theme/brand.js";

const { colors, typography } = brandTheme;

function DeviceIllustration() {
  return (
    <Column
      style={{
        width: 400,
        height: 370,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.surface,
        border: { width: 1, style: "solid", color: colors.border },
        borderRadius: 24,
        gap: 16,
      }}
    >
      <Text style={{ color: colors.accent, fontSize: 11, fontWeight: 700, letterSpacing: 2 }}>EDGE COMPUTING / 01</Text>
      <Column
        style={{
          width: 230,
          height: 170,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.primaryDeep,
          border: { width: 2, style: "solid", color: colors.primary },
          borderRadius: 22,
          gap: 14,
        }}
      >
        <Text style={{ color: colors.ink, fontSize: 13, fontWeight: 700, letterSpacing: 2 }}>{product.product.name.toUpperCase()}</Text>
        <Row style={{ alignItems: "center", gap: 10 }}>
          <Text style={{ color: colors.primary, fontSize: 26 }}>●</Text>
          <Text style={{ color: colors.primary, fontSize: 26 }}>●</Text>
          <Text style={{ color: colors.primary, fontSize: 26 }}>●</Text>
        </Row>
      </Column>
      <Text style={{ color: colors.mutedInk, fontSize: 12, letterSpacing: 1 }}>LOCAL SIGNAL. CLEARER ACTION.</Text>
    </Column>
  );
}

function Highlight({ index, children }: { index: string; children: string }) {
  return (
    <Row
      style={{
        alignItems: "center",
        gap: 10,
        padding: [9, 12],
        backgroundColor: colors.surface,
        border: { width: 1, style: "solid", color: colors.border },
        borderRadius: 999,
      }}
    >
      <Text style={{ color: colors.primary, fontSize: 10, fontWeight: 700 }}>{index}</Text>
      <Text style={{ color: colors.ink, fontSize: 12, fontWeight: 600 }}>{children}</Text>
    </Row>
  );
}

export default function SocialCard() {
  return (
    <Canvas
      width={1200}
      height={630}
      title={`${product.product.name} launch announcement`}
      lang="en"
      style={{
        backgroundColor: colors.canvas,
        color: colors.ink,
        fontFamily: typography.fontFamily,
        padding: 52,
        gap: 0,
        justifyContent: "space-between",
      }}
    >
      <Row style={{ alignItems: "center", justifyContent: "space-between", gap: 34 }}>
        <Column style={{ width: 620, gap: 17 }}>
          <Text style={{ color: colors.primary, fontSize: 12, fontWeight: 700, letterSpacing: 2.1, textTransform: "uppercase" }}>
            {product.brand.name}  /  PRODUCT ANNOUNCEMENT
          </Text>
          <Heading level={1} style={{ color: colors.ink, fontSize: 60, lineHeight: 1.02 }}>
            {product.product.name}
          </Heading>
          <Heading level={2} style={{ color: colors.primary, fontSize: 31, lineHeight: 1.15 }}>
            {product.campaign.socialHeadline}
          </Heading>
          <Text style={{ color: colors.mutedInk, fontSize: 17, lineHeight: 1.45, maxWidth: 590 }}>
            {product.campaign.socialCaption}
          </Text>
          <Column style={{ gap: 8, padding: [3, 0, 0] }}>
            {product.product.featureLabels.map((highlight, index) => (
              <Highlight key={highlight} index={`0${index + 1}`}>{highlight}</Highlight>
            ))}
          </Column>
        </Column>
        <DeviceIllustration />
      </Row>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          padding: [16, 0, 0],
          border: { top: { width: 1, style: "solid", color: colors.border } },
        }}
      >
        <Row style={{ alignItems: "center", gap: 10 }}>
          <Text style={{ color: colors.primary, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{product.campaign.earlyAccessLabel}</Text>
          <Text style={{ color: colors.mutedInk, fontSize: 12 }}>{product.brand.tagline}</Text>
        </Row>
        <Text style={{ color: colors.ink, fontSize: 13, fontWeight: 700 }}>
          {product.brand.website.replace(/^https:\/\//, "")}{product.campaign.productPath} <Span style={{ color: colors.primary }}>↗</Span>
        </Text>
      </Row>
    </Canvas>
  );
}
