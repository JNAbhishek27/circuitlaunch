import type { ReactNode } from "react";
import {
  Column,
  Document,
  Heading,
  Image,
  Link,
  PageBreak,
  PageFooter,
  PageHeader,
  Row,
  Section,
  Span,
  Table,
  TableCell,
  TableRow,
  Text,
} from "@hyper-elements/react";
import { product } from "../../config/product.js";
import { brandTheme } from "../../theme/brand.js";

const { colors, typography } = brandTheme;
const pageBackground = colors.documentBackground;
const panel = colors.documentSurface;
const line = colors.documentBorder;
const body = { color: colors.documentText, fontSize: 10.5, lineHeight: 1.45 };
const label = { color: colors.primary, fontSize: 8, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" as const };
const title = { color: colors.ink, fontFamily: typography.displayFontFamily, fontWeight: 700 as const };

function RunningHeader({ pageLabel }: { pageLabel: string }) {
  return (
    <PageHeader style={{ padding: [0, 0, 10], border: { bottom: { width: 1, style: "solid", color: line } } }}>
      <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ color: colors.ink, fontSize: 9, fontWeight: 700, letterSpacing: 0.8 }}>
          {product.brand.name.toUpperCase()}
        </Text>
        <Text style={{ color: colors.mutedInk, fontSize: 8, letterSpacing: 0.7 }}>{pageLabel}</Text>
      </Row>
    </PageHeader>
  );
}

function RunningFooter({ section }: { section: string }) {
  return (
    <PageFooter style={{ padding: [10, 0, 0], border: { top: { width: 1, style: "solid", color: line } } }}>
      <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
      <Text style={{ color: colors.documentText, fontSize: 8 }}>{product.product.name.toUpperCase()}  /  {section.toUpperCase()}  /  {product.product.launchDate}</Text>
        <Text style={{ color: colors.primary, fontSize: 8, fontWeight: 700 }}>{product.brand.name.toUpperCase()}  •  <Text><PageNumber /> / <PageNumber total /></Text></Text>
      </Row>
    </PageFooter>
  );
}

function DatasheetPage({ pageLabel, section, children }: { pageLabel: string; section: string; children: ReactNode }) {
  return (
    <Document.Page style={{ backgroundColor: pageBackground, color: colors.ink, fontFamily: typography.fontFamily, fontSize: 10, lineHeight: 1.4, gap: 0 }}>
      <RunningHeader pageLabel={pageLabel} />
      <Column style={{ flex: 1, gap: 22, padding: [22, 0] }}>{children}</Column>
      <RunningFooter section={section} />
    </Document.Page>
  );
}

function SectionTitle({ index, eyebrow, heading, description }: { index: string; eyebrow: string; heading: string; description?: string }) {
  return (
    <Column style={{ gap: 8 }}>
      <Text style={label}>{index}  /  {eyebrow}</Text>
      <Heading level={2} style={{ ...title, fontSize: 25, lineHeight: 1.15 }}>{heading}</Heading>
      {description ? <Text style={body}>{description}</Text> : null}
    </Column>
  );
}

function CoverPage() {
  return (
    <Document.Page style={{ backgroundColor: pageBackground, color: colors.ink, fontFamily: typography.fontFamily, gap: 0 }}>
      <Section style={{ backgroundColor: pageBackground, padding: [8, 0, 0] }}>
        <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ color: colors.ink, fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>
            {product.brand.name.toUpperCase()}
          </Text>
          <Text style={{ color: colors.mutedInk, fontSize: 8, letterSpacing: 1 }}>PRODUCT BRIEF  /  01</Text>
        </Row>
      </Section>
      <Column style={{ flex: 1, justifyContent: "center", gap: 24, padding: [38, 0, 28] }}>
        <Column style={{ gap: 12 }}>
          <Text style={label}>EDGE COMPUTING  /  IOT GATEWAY</Text>
          <Heading level={1} style={{ ...title, fontSize: 42, lineHeight: 1.02 }}>{product.product.name}</Heading>
          <Text style={{ color: colors.primary, fontSize: 16, fontWeight: 500, lineHeight: 1.35 }}>
            Intelligence, closer to your devices.
          </Text>
        </Column>
        <Image
          src={{ src: product.product.image.src, width: product.product.image.width, height: product.product.image.height }}
          alt={product.product.image.alt}
          style={{ width: "100%", height: 250, borderRadius: 8, border: { width: 1, style: "solid", color: line } }}
        />
        <Row style={{ gap: 16 }}>
          <Column style={{ flex: 1, backgroundColor: panel, border: { left: { width: 2, style: "solid", color: colors.primary } }, padding: [12, 14], gap: 6 }}>
            <Text style={label}>LOCAL-FIRST</Text>
          <Text style={{ color: colors.ink, fontSize: 10, lineHeight: 1.4 }}>{product.product.benefitDescriptions[0]}</Text>
          </Column>
          <Column style={{ flex: 1, backgroundColor: panel, border: { left: { width: 2, style: "solid", color: colors.primary } }, padding: [12, 14], gap: 6 }}>
            <Text style={label}>FIELD-READY</Text>
          <Text style={{ color: colors.ink, fontSize: 10, lineHeight: 1.4 }}>{product.product.benefitDescriptions[1]}</Text>
          </Column>
          <Column style={{ flex: 1, backgroundColor: panel, border: { left: { width: 2, style: "solid", color: colors.primary } }, padding: [12, 14], gap: 6 }}>
            <Text style={label}>CONNECTED</Text>
          <Text style={{ color: colors.ink, fontSize: 10, lineHeight: 1.4 }}>{product.product.benefitDescriptions[2]}</Text>
          </Column>
        </Row>
      </Column>
      <Row style={{ padding: [12, 0, 0], border: { top: { width: 1, style: "solid", color: line } }, justifyContent: "space-between" }}>
        <Text style={{ color: colors.mutedInk, fontSize: 8 }}>HARDWARE PRODUCT OVERVIEW  ·  NOVEMBER 2026</Text>
        <Text style={{ color: colors.primary, fontSize: 8, fontWeight: 700 }}>{product.brand.name.toUpperCase()}</Text>
      </Row>
    </Document.Page>
  );
}

function FeaturesPage() {
  return (
    <DatasheetPage pageLabel="PRODUCT OVERVIEW" section="Overview">
      <SectionTitle
        index="01"
        eyebrow="Product introduction"
        heading="Reliable intelligence at the edge."
        description={product.product.description}
      />
      <Column style={{ backgroundColor: panel, borderRadius: 6, padding: 20, gap: 12 }}>
        <Text style={label}>Designed for deployment</Text>
        <Text style={{ ...body, fontSize: 11 }}>
          {product.product.name} is a compact {product.product.category.toLowerCase()} for teams that need useful device data close to where it is created. {product.campaign.productIntroduction}
        </Text>
      </Column>
      <Column style={{ gap: 12 }}>
        <Text style={label}>Core capabilities</Text>
        {product.product.features.map((feature, index) => (
          <Row key={feature} style={{ alignItems: "start", gap: 14, padding: [14, 16], backgroundColor: panel, border: { left: { width: 2, style: "solid", color: colors.primary } } }}>
            <Text style={{ color: colors.primary, fontSize: 9, fontWeight: 700 }}>0{index + 1}</Text>
            <Column style={{ flex: 1, gap: 5 }}>
              <Heading level={3} style={{ color: colors.ink, fontSize: 13, lineHeight: 1.25 }}>{feature}</Heading>
              <Text style={body}>{product.product.benefitDescriptions[index]}</Text>
            </Column>
          </Row>
        ))}
      </Column>
      <Column style={{ gap: 10 }}>
        <Text style={label}>Product benefits</Text>
        <Row style={{ gap: 12 }}>
          {product.campaign.brochureBenefits.map((benefit) => (
            <Column key={benefit.title} style={{ flex: 1, gap: 6, padding: 14, border: { width: 1, style: "solid", color: line }, borderRadius: 5 }}>
              <Text style={{ color: colors.ink, fontSize: 10, fontWeight: 700 }}>{benefit.title}</Text>
              <Text style={{ color: colors.mutedInk, fontSize: 9, lineHeight: 1.4 }}>{benefit.detail}</Text>
            </Column>
          ))}
        </Row>
      </Column>
    </DatasheetPage>
  );
}

function SpecificationsPage() {
  return (
    <DatasheetPage pageLabel="SPECIFICATIONS & APPLICATIONS" section="Specifications">
        <SectionTitle index="02" eyebrow="Technical data" heading="Specifications" description={`${product.product.name} at a glance. Confirm final deployment requirements with ${product.brand.name}.`} />
      <Table style={{ width: "100%", borderCollapse: "collapse", cellPadding: [11, 13], rowBorder: { width: 1, style: "solid", color: line } }}>
        <TableRow header style={{ backgroundColor: panel }}>
          <TableCell style={{ color: colors.primary, fontSize: 8, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase" }}>Parameter</TableCell>
          <TableCell style={{ color: colors.primary, fontSize: 8, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase" }}>Specification</TableCell>
        </TableRow>
        {product.product.specifications.map((spec) => (
          <TableRow key={spec.label}>
            <TableCell style={{ width: "38%", color: colors.mutedInk, fontSize: 9.5 }}>{spec.label}</TableCell>
            <TableCell style={{ color: colors.ink, fontSize: 9.5, fontWeight: 600 }}>{spec.value}</TableCell>
          </TableRow>
        ))}
      </Table>
      <Column style={{ gap: 12, padding: [8, 0, 0] }}>
        <SectionTitle index="03" eyebrow="Applications" heading={product.campaign.brochureUseCasesHeading} />
        <Column style={{ gap: 10 }}>
          {product.applications.map((useCase, index) => (
            <Row key={useCase.title} style={{ gap: 14, alignItems: "start", padding: [12, 14], backgroundColor: panel }}>
              <Text style={{ color: colors.primary, fontSize: 8, fontWeight: 700 }}>0{index + 1}</Text>
              <Column style={{ flex: 1, gap: 4 }}>
                <Text style={{ color: colors.ink, fontSize: 10, fontWeight: 700 }}>{useCase.title}</Text>
                <Text style={{ ...body, fontSize: 9 }}>{useCase.detail}</Text>
              </Column>
            </Row>
          ))}
        </Column>
      </Column>
      <Column style={{ backgroundColor: colors.primaryDeep, borderRadius: 6, padding: 18, gap: 9 }}>
        <Text style={label}>Start a conversation</Text>
        <Text style={{ color: colors.ink, fontSize: 12, fontWeight: 700 }}>Put dependable edge connectivity to work.</Text>
        <Text style={body}>For product information and early access, contact {product.brand.contactName}.</Text>
        <Link href={`mailto:${product.brand.contactEmail}`} style={{ color: colors.primary, fontSize: 10, fontWeight: 700 }}>{product.brand.contactEmail}</Link>
        <Link href={product.brand.website} style={{ color: colors.primary, fontSize: 10 }}>{product.brand.website}</Link>
      </Column>
      <Text style={{ color: colors.mutedInk, fontSize: 7.5, lineHeight: 1.4 }}>
        Product information is illustrative and subject to change. {product.product.name} is fictional sample product data prepared for the {product.brand.name} template project.
      </Text>
    </DatasheetPage>
  );
}

export default function ProductBrochure() {
  return (
    <Document
      title={product.campaign.brochureTitle}
      size="A4"
      orientation="portrait"
      margin={brandTheme.layout.documentMargin}
      lang="en"
      style={{ backgroundColor: pageBackground, color: colors.ink, fontFamily: typography.fontFamily, fontSize: 10, lineHeight: 1.4, gap: 0 }}
    >
      <CoverPage />
      <PageBreak />
      <FeaturesPage />
      <PageBreak />
      <SpecificationsPage />
    </Document>
  );
}
