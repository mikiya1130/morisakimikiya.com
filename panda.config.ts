import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

// Chakra v2 の実効スタイルを再現するグローバルスタイル。
// 実値の出典: ~/code/temp/morisakimikiya-upgrade-20260721/chakra-used-vars.txt(baseline から抽出)
const globalCss = defineGlobalStyles({
  html: {
    textRendering: 'optimizeLegibility',
    touchAction: 'manipulation',
  },
  body: {
    position: 'relative',
    minHeight: '100%',
    fontFeatureSettings: '"kern"',
    bg: 'teal',
    color: 'gray.800',
    fontFamily: 'body',
    lineHeight: '1.8em',
  },
  img: { pointerEvents: 'none' },
});

export default defineConfig({
  preflight: true,
  // preflight の border / placeholder / html font を Chakra 実値に合わせるフック
  globalVars: {
    '--global-font-body': `'Noto Sans JP'`,
    '--global-color-border': 'var(--colors-gray-200)',
    '--global-color-placeholder': 'var(--colors-gray-500)',
    '--transition-property-common':
      'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
  },
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'src/styled-system',
  importMap: '@/styled-system',
  jsxFramework: 'react',
  theme: {
    extend: {
      breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
      },
      tokens: {
        colors: {
          black: { value: '#252A34' },
          white: { value: '#EAEAEA' },
          red: { DEFAULT: { value: '#FF2E63' } },
          teal: { DEFAULT: { value: '#08D9D6' } },
          yellow: { DEFAULT: { value: '#F4B14C' } },
          // Chakra v2 の gray スケール(preset の Tailwind 値と別物のため上書き必須)
          gray: {
            50: { value: '#F7FAFC' },
            100: { value: '#EDF2F7' },
            200: { value: '#E2E8F0' },
            300: { value: '#CBD5E0' },
            400: { value: '#A0AEC0' },
            500: { value: '#718096' },
            600: { value: '#4A5568' },
            700: { value: '#2D3748' },
            800: { value: '#1A202C' },
            900: { value: '#171923' },
            950: { value: '#171923' },
          },
        },
        fonts: {
          heading: { value: `'Sriracha', 'Noto Sans JP'` },
          body: { value: `'Noto Sans JP'` },
        },
        lineHeights: {
          normal: { value: 'normal' },
        },
        shadows: {
          // Chakra の focus ring
          outline: { value: '0 0 0 3px rgba(66, 153, 225, 0.6)' },
        },
      },
    },
  },
  globalCss,
});
