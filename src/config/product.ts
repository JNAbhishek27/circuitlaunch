import { pulseNodeEdgeIllustration } from "../assets/pulsenode-edge.js";

/**
 * CircuitLaunch sample launch configuration.
 *
 * Customize this file to create a new coordinated campaign. Keep all product,
 * brand, technical, contact, and campaign copy here; the four output templates
 * read from this object so a product name or specification change propagates
 * to the email, landing page, brochure, and social card together.
 *
 * Keep a public HTTPS image URL for email clients, which may block data URIs.
 * `localSrc` is the bundled vector artwork used by page and print renderers.
 * Update product.callToActionUrl and campaign.productPath together when the
 * product landing URL changes.
 */
export interface ProductImage {
  src: string;
  localSrc?: string;
  alt: string;
  width: number;
  height: number;
}

export interface TechnicalSpecification {
  label: string;
  value: string;
}

export interface ProductApplication {
  title: string;
  detail: string;
}

export interface BrandColors {
  ink: string;
  primaryForeground: string;
  mutedInk: string;
  canvas: string;
  surface: string;
  primary: string;
  primaryDeep: string;
  accent: string;
  border: string;
  documentBackground: string;
  documentSurface: string;
  documentBorder: string;
  documentText: string;
}

export interface LaunchConfig {
  brand: {
    name: string;
    tagline: string;
    website: string;
    contactName: string;
    contactEmail: string;
    postalAddress: string;
    colors: BrandColors;
  };
  product: {
    name: string;
    category: string;
    description: string;
    shortDescription: string;
    launchDate: string;
    callToAction: string;
    callToActionUrl: string;
    image: ProductImage;
    features: string[];
    featureLabels: string[];
    benefitDescriptions: string[];
    specifications: TechnicalSpecification[];
  };
  applications: ProductApplication[];
  campaign: {
    emailSubject: string;
    emailPreview: string;
    productIntroduction: string;
    announcementHeadline: string;
    socialHeadline: string;
    socialCaption: string;
    brochureTitle: string;
    productPath: string;
    emailBenefitsHeading: string;
    emailTechnicalHeading: string;
    earlyAccessLabel: string;
    landingFeatureHeading: string;
    landingApplicationHeading: string;
    landingContactHeading: string;
    brochureUseCasesHeading: string;
    brochureBenefits: { title: string; detail: string }[];
  };
}

/** Fictional sample data. Replace values here to customize all four outputs. */
export const product: LaunchConfig = {
  brand: {
    name: "CircuitLaunch",
    tagline: "Hardware launches, connected.",
    website: "https://circuitlaunch.example",
    contactName: "CircuitLaunch Product Team",
    contactEmail: "hello@circuitlaunch.example",
    postalAddress: "CircuitLaunch Product Team · Online",
    colors: {
      ink: "#F2F8FC",
      primaryForeground: "#04111C",
      mutedInk: "#A3B5C6",
      canvas: "#07121F",
      surface: "#0D1B2A",
      primary: "#31D7F5",
      primaryDeep: "#10263A",
      accent: "#83F1FF",
      border: "#20364A",
      documentBackground: "#081522",
      documentSurface: "#102233",
      documentBorder: "#294153",
      documentText: "#C2CED8",
    },
  },
  product: {
    name: "PulseNode Edge",
    category: "Edge IoT gateway",
    shortDescription:
      "A compact, dependable edge gateway that keeps device data moving, even when the connection gets complicated.",
    description:
      "PulseNode Edge brings local device connectivity, secure processing, and clear fleet visibility into one small, field-ready gateway. It is designed for teams that need useful data at the edge without adding operational complexity.",
    launchDate: "2026-11-29",
    callToAction: "Join the early access list",
    callToActionUrl: "https://circuitlaunch.example/pulsenode-edge",
    image: {
      src: "https://placehold.co/1200x800/png?text=PulseNode+Edge",
      localSrc: pulseNodeEdgeIllustration,
      alt: "PulseNode Edge gateway, a compact dark navy IoT device with Ethernet ports and cyan status lights",
      width: 1200,
      height: 800,
    },
    features: [
      "Local-first processing for faster device response",
      "Secure MQTT and HTTPS connectivity",
      "Fleet health and telemetry in one clear dashboard",
    ],
    featureLabels: [
      "Local-first processing",
      "Secure MQTT + HTTPS",
      "Fleet health + telemetry",
    ],
    benefitDescriptions: [
      "Keep essential logic close to equipment for responsive operation and continuity.",
      "Connect with established secure protocols that fit the systems already in use.",
      "See device health and telemetry together, with less operational guesswork.",
    ],
    specifications: [
      { label: "Connectivity", value: "Ethernet, Wi-Fi, BLE" },
      { label: "Protocols", value: "MQTT, HTTPS, Modbus TCP" },
      { label: "Operating range", value: "−10°C to 55°C" },
      { label: "Power", value: "USB-C, 5V / 3A" },
    ],
  },
  applications: [
    { title: "Smart buildings", detail: "Coordinate building systems and understand performance in real time." },
    { title: "Industrial operations", detail: "Bring equipment signals together near the production line." },
    { title: "Distributed infrastructure", detail: "Keep remote assets observable across connected locations." },
  ],
  campaign: {
    emailSubject: "Meet PulseNode Edge: dependable data, closer to your devices",
    emailPreview: "A compact edge gateway for clearer fleet visibility and local-first processing.",
    productIntroduction:
      "Bring local processing, resilient connectivity, and fleet visibility together in one field-ready gateway. Keep critical signals close, useful, and ready to act on.",
    announcementHeadline: "Intelligence, closer to your devices.",
    socialHeadline: "Bring intelligence closer to your devices.",
    socialCaption: "A compact edge gateway for clearer fleet visibility and local-first processing.",
    brochureTitle: "PulseNode Edge Product Brief",
    productPath: "/pulsenode-edge",
    emailBenefitsHeading: "Built to make edge data more useful.",
    emailTechnicalHeading: "Designed for real deployments.",
    earlyAccessLabel: "EARLY ACCESS",
    landingFeatureHeading: "Purpose-built at the edge",
    landingApplicationHeading: "One reliable edge. Many places to put it to work.",
    landingContactHeading: "Make the edge your advantage.",
    brochureUseCasesHeading: "Built for connected environments.",
    brochureBenefits: [
      { title: "Lower latency", detail: "Make local decisions without routing every signal to the cloud." },
      { title: "Simpler visibility", detail: "Understand device and fleet status from a consistent view." },
    ],
  },
};

export type Product = LaunchConfig["product"];
