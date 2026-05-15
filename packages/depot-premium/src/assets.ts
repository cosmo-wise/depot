/**
 * Depot Premium — commercial asset layer.
 *
 * These assets require a commercial license. They provide
 * industry-specific, high-value blocks and templates on top
 * of the open-source core contracts/tokens layer.
 */

// ─── Premium Block: Analytics Dashboard ──────────────────────────

export const ANALYTICS_DASHBOARD_BLOCK = {
  name: "analytics-dashboard",
  version: "1.0.0",
  category: "block",
  description: "Pre-built analytics dashboard with KPI cards, charts, and filters",
  industry: "saas",
  dependencies: ["@depot/core", "@depot/web-radix"],
  components: [
    "KpiCard", "TimeSeriesChart", "FilterBar",
    "DataTable", "ExportButton",
  ],
  layout: {
    grid: "dashboard-12col",
    slots: [
      { position: "top", component: "FilterBar" },
      { position: "row-1", cols: 3, repeat: "KpiCard" },
      { position: "row-2", cols: 8, component: "TimeSeriesChart" },
      { position: "row-3", cols: 12, component: "DataTable" },
    ],
  },
};

// ─── Premium Template: SaaS Landing Page ─────────────────────────

export const SAAS_LANDING_TEMPLATE = {
  name: "saas-landing",
  version: "1.0.0",
  category: "template",
  description: "Conversion-optimized SaaS landing page with hero, features, pricing",
  industry: "saas",
  sections: [
    { id: "hero", component: "MarketingHeroBlock", order: 1 },
    { id: "features", component: "FeatureGrid", order: 2 },
    { id: "testimonials", component: "TestimonialCarousel", order: 3 },
    { id: "pricing", component: "PricingTable", order: 4 },
    { id: "cta", component: "CallToAction", order: 5 },
  ],
  seo: {
    titleTemplate: "{page} | {company}",
    metaDefaults: {
      ogType: "website",
      twitterCard: "summary_large_image",
    },
  },
};

// ─── Premium Branding: Enterprise Theme ──────────────────────────

export const ENTERPRISE_THEME = {
  name: "enterprise-theme",
  version: "1.0.0",
  category: "branding",
  description: "Enterprise-grade theme with accessibility-first design",
  tokens: {
    colors: {
      primary: "#1a56db",
      secondary: "#7c3aed",
      accent: "#059669",
      neutral: "#6b7280",
    },
    typography: {
      heading: "Inter, sans-serif",
      body: "Inter, sans-serif",
      mono: "JetBrains Mono, monospace",
    },
    spacing: {
      unit: 4,
      scale: [0, 4, 8, 12, 16, 24, 32, 48, 64],
    },
    accessibility: {
      minContrastRatio: 4.5,
      focusRing: "2px solid #1a56db",
      reducedMotion: true,
    },
  },
};
