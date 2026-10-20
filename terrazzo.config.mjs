import { defineConfig } from '@terrazzo/cli';
import css from '@terrazzo/plugin-css';
import { makeCSSVar } from '@terrazzo/token-tools/css';

// Names follow Tailwind's theme namespaces, so a site's @theme can map its roles onto them directly.
const prefixes = [
  ['color.', 'color'],
  ['font.family.', 'font'],
  ['font.weight.', 'font-weight'],
  ['type.', 'text'],
];

export default defineConfig({
  tokens: ['./tokens.json'],
  outDir: './dist/',
  lint: {
    rules: {
      // tokens.json keeps the designer's string format for colors and dimensions. The dimension
      // rule rejects every string even with legacyFormat on, so it is off.
      'core/valid-color': ['error', { legacyFormat: true }],
      'core/valid-dimension': 'off',
    },
  },
  plugins: [
    css({
      filename: 'tokens.css',
      // Pairings and logo sizes are usage rules, and siteTheme belongs to the marketing sites.
      exclude: ['colorCombination.**', 'logo.**', 'siteTheme.**'],
      legacyHex: true,
      omitTypographyShorthand: true,
      variableName(token) {
        const [prefix, namespace] = prefixes.find(([p]) => token.id.startsWith(p));
        return makeCSSVar(`${namespace}.${token.id.slice(prefix.length)}`);
      },
      subValueVariableName(variableName, subValueName) {
        return subValueName === 'font-size' ? variableName : `${variableName}--${subValueName}`;
      },
    }),
  ],
});
