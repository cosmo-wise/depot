/**
 * Depot Asset Layer Manifest
 *
 * Defines the boundary between the open-source core layer
 * (contracts + tokens) and the premium commercial layer
 * (blocks + templates + branding assets).
 *
 * @module depot
 * @version 1
 */

/** Asset layer classification. */
export type AssetLayer = "core" | "premium";

/** A depot asset entry. */
export interface DepotAsset {
  name: string;
  layer: AssetLayer;
  package: string;       // npm package name
  path: string;          // filesystem path relative to repo root
  category: AssetCategory;
  description: string;
  version: string;
  dependencies?: string[];
  license: "MIT" | "Apache-2.0" | "commercial";
}

export type AssetCategory =
  | "contract"    // Type contracts, schemas
  | "token"       // Design tokens (colors, spacing, typography)
  | "block"       // Reusable UI block
  | "template"    // Full page/section template
  | "branding"    // Brand assets, themes
  | "profile";    // Depot profiles (e.g., "web-radix")

/** Open-source core layer — always free. */
export const CORE_LAYER: AssetCategory[] = [
  "contract",
  "token",
  "profile",
];

/** Premium commercial layer — requires license. */
export const PREMIUM_LAYER: AssetCategory[] = [
  "block",
  "template",
  "branding",
];

/**
 * Asset manifest — registers all depot assets and their
 * layer classification for discovery and license enforcement.
 */
export interface DepotAssetManifest {
  version: 1;
  layers: {
    core: DepotAsset[];
    premium: DepotAsset[];
  };
  generatedAt: string;
}

/** Create an empty manifest. */
export function createManifest(): DepotAssetManifest {
  return {
    version: 1,
    layers: { core: [], premium: [] },
    generatedAt: new Date().toISOString(),
  };
}

/** Register a core asset. */
export function registerCore(
  manifest: DepotAssetManifest,
  asset: DepotAsset,
): void {
  asset.layer = "core";
  asset.license = "MIT";
  manifest.layers.core.push(asset);
}

/** Register a premium asset. */
export function registerPremium(
  manifest: DepotAssetManifest,
  asset: DepotAsset,
): void {
  asset.layer = "premium";
  asset.license = "commercial";
  manifest.layers.premium.push(asset);
}

/** Check if a category is in the core (open-source) layer. */
export function isCoreLayer(category: AssetCategory): boolean {
  return CORE_LAYER.includes(category);
}

/** Check if a category requires a commercial license. */
export function isPremiumLayer(category: AssetCategory): boolean {
  return PREMIUM_LAYER.includes(category);
}

/** Validate that an asset's category matches its declared layer. */
export function validateAssetLayer(asset: DepotAsset): string | null {
  if (asset.layer === "core" && isPremiumLayer(asset.category)) {
    return `Asset "${asset.name}" is marked core but category "${asset.category}" requires premium layer`;
  }
  if (asset.layer === "premium" && isCoreLayer(asset.category)) {
    return `Asset "${asset.name}" is marked premium but category "${asset.category}" belongs in core layer`;
  }
  return null;
}
