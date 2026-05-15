/**
 * Depot Schemas — asset registry and profile contract definitions.
 *
 * These types define the stable contracts for frontend asset
 * registration, profile compatibility, and licensing metadata.
 *
 * @module depot/schemas
 * @version 1
 */

// ─── Asset Registry ────────────────────────────────────────────────

export interface AssetEntry {
  name: string;
  version: string;
  category: AssetCategory;
  layer: AssetLayer;
  license: AssetLicense;
  package: string;
  dependencies?: string[];
  compatibility?: CompatibilityMatrix;
}

export type AssetCategory =
  | "contract" | "token" | "block" | "template"
  | "branding" | "profile" | "manifest";

export type AssetLayer = "core" | "premium";

export type AssetLicense = "MIT" | "Apache-2.0" | "commercial";

// ─── Compatibility Matrix ──────────────────────────────────────────

export interface CompatibilityMatrix {
  frameworkVersions: Record<string, string>; // framework -> min version
  browserSupport: BrowserSupport;
  responsiveBreakpoints?: ResponsiveBreakpoint[];
}

export interface BrowserSupport {
  chrome?: string;
  firefox?: string;
  safari?: string;
  edge?: string;
}

export interface ResponsiveBreakpoint {
  name: string;    // e.g. "mobile", "tablet", "desktop"
  minWidth?: number;
  maxWidth?: number;
}

// ─── Profile Manifests ─────────────────────────────────────────────

export interface DepotProfile {
  name: string;
  version: number;
  displayName: string;
  description: string;
  framework: string;          // e.g. "react", "vue", "svelte"
  styling: string;            // e.g. "tailwind", "css-modules"
  tokens: DesignTokens;
  blocks: string[];           // block names included
  templates: string[];        // template names included
  branding: BrandingConfig;
}

export interface DesignTokens {
  colors: Record<string, string>;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  breakpoints: Record<string, number>;
}

export interface TypographyTokens {
  fontFamily: string;
  headingFont?: string;
  monoFont?: string;
  scale: Record<string, { size: string; lineHeight: string; weight?: number }>;
}

export interface SpacingTokens {
  unit: number; // px
  scale: number[];
}

// ─── Branding ──────────────────────────────────────────────────────

export interface BrandingConfig {
  companyName: string;
  logoUrl?: string;
  faviconUrl?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily?: string;
  customDomain?: string;
}

// ─── Registry Manifest ─────────────────────────────────────────────

export interface DepotRegistryManifest {
  version: 1;
  profiles: DepotProfile[];
  assets: AssetEntry[];
  generatedAt: string;
}

// ─── Industry Profile ──────────────────────────────────────────────

export interface IndustryProfile {
  id: string;
  name: string;
  industry: "saas" | "healthcare" | "finance" | "education" | "ecommerce" | "custom";
  defaultProfile: string;     // profile name
  complianceStandards: string[];
  description: string;
}
