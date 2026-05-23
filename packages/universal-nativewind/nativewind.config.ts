import { nativeTokens } from '@chariot/depot-tokens/native';
import type { Config } from 'tailwindcss';

function mapColorScale(name: string, scale: Record<string, string>): Record<string, string> {
  const mapped: Record<string, string> = {};
  for (const [shade, value] of Object.entries(scale)) {
    mapped[shade] = value;
  }
  return mapped;
}

const colors = nativeTokens.colors;

const colorTheme: Record<string, Record<string, string>> = {};
for (const [name, scale] of Object.entries(colors)) {
  if (typeof scale === 'object' && scale !== null) {
    colorTheme[name] = mapColorScale(name, scale as Record<string, string>);
  }
}

const nativewindPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: colorTheme,
      spacing: nativeTokens.spacing || {},
      borderRadius: nativeTokens.radius || {},
      boxShadow: nativeTokens.shadow || {},
      fontFamily: nativeTokens.typography?.fontFamily || {},
      fontSize: nativeTokens.typography?.fontSize || {},
      fontWeight: nativeTokens.typography?.fontWeight || {},
    },
  },
};

export default nativewindPreset;
