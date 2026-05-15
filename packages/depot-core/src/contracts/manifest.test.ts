import { describe, expect, it } from "vitest";
import {
  createManifest,
  registerCore,
  registerPremium,
  isCoreLayer,
  isPremiumLayer,
  validateAssetLayer,
  type DepotAsset,
} from "../../src/contracts/manifest.js";

function makeAsset(
  overrides: Partial<DepotAsset> = {},
): DepotAsset {
  return {
    name: "test-asset",
    layer: "core",
    package: "@depot/test",
    path: "packages/depot-core/src/test",
    category: "token",
    description: "Test asset",
    version: "1.0.0",
    license: "MIT",
    ...overrides,
  };
}

describe("Depot manifest", () => {
  it("creates empty manifest", () => {
    const manifest = createManifest();
    expect(manifest.version).toBe(1);
    expect(manifest.layers.core).toEqual([]);
    expect(manifest.layers.premium).toEqual([]);
  });

  it("registers core and premium assets", () => {
    const manifest = createManifest();
    registerCore(manifest, makeAsset({ name: "core-a", category: "token" }));
    registerPremium(manifest, makeAsset({ name: "block-a", category: "block", license: "commercial" }));
    expect(manifest.layers.core).toHaveLength(1);
    expect(manifest.layers.premium).toHaveLength(1);
    expect(manifest.layers.core[0].license).toBe("MIT");
    expect(manifest.layers.premium[0].license).toBe("commercial");
  });

  it("isCoreLayer returns true for core categories", () => {
    expect(isCoreLayer("contract")).toBe(true);
    expect(isCoreLayer("token")).toBe(true);
    expect(isCoreLayer("profile")).toBe(true);
  });

  it("isCoreLayer returns false for premium categories", () => {
    expect(isCoreLayer("block")).toBe(false);
    expect(isCoreLayer("template")).toBe(false);
    expect(isCoreLayer("branding")).toBe(false);
  });

  it("isPremiumLayer returns true for premium categories", () => {
    expect(isPremiumLayer("block")).toBe(true);
    expect(isPremiumLayer("template")).toBe(true);
  });

  it("validateAssetLayer catches mismatch", () => {
    const err = validateAssetLayer(
      makeAsset({ layer: "core", category: "block", license: "MIT" }),
    );
    expect(err).not.toBeNull();
    expect(err).toContain("requires premium");
  });

  it("validateAssetLayer allows correct classification", () => {
    expect(validateAssetLayer(makeAsset({ category: "token", layer: "core" }))).toBeNull();
    expect(validateAssetLayer(makeAsset({ category: "block", layer: "premium", license: "commercial" }))).toBeNull();
  });
});
