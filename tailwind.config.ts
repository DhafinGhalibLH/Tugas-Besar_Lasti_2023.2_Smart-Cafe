import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5E2816',
        primary2: '#6B8E23',
        secondary: '#D2B48C',
        black: '#0B0A0A',
        gray: '#BFBFBF',
        white: '#FFFFFF',
      },
      fontFamily: {
        lato: ['lato', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
      },
      fontSize: {
        // uppercase
        heading1: ['96px', { 
          lineHeight: '110.53px',
          fontWeight: '700',
        }],
        // uppercase
        heading2: ['72px', {
          lineHeight: '82.9px',
          fontWeight: '700',
        }],
        heading3: ['48px', {
          lineHeight: '57.26px',
          fontWeight: '400',
        }],
        heading4: ['36px', {
          lineHeight: '42.95px',
          fontWeight: '400',
        }],
        h1mobile: ['24px', {
          lineHeight: '29.3px',
          fontWeight: '700',
        }],
        h2mobile: ['20px', {
          lineHeight: '24.2px',
          fontWeight: '700',
        }],
        subtitle1: ['16px', {
          lineHeight: '19.54px',
          fontWeight: '700',
        }],
        subtitle2: ['14px', {
          lineHeight: '17.09px',
          fontWeight: '700',
        }],
        body1: ['16px', {
          lineHeight: '19.09px',
          fontWeight: '400',
        }],
        body2: ['14px', {
          lineHeight: '16.7px',
          fontWeight: '400',
        }],
        button: ['14px', {
          lineHeight: '17.09px',
          fontWeight: '700',
        }],
        caption: ['12px', {
          lineHeight: '14.32px',
          fontWeight: '400',
        }],
        // uppercase
        overline: ['10px', {
          lineHeight: '12.02px',
          fontWeight: '700',
        }],
        tag: ['10px', {
          lineHeight: '11.93px',
          fontWeight: '400',
        }],
        label: ['8px', {
          lineHeight: '9.54px',
          fontWeight: '400',
        }],
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      const newUtilities = {
        '.text-heading1': {
          fontSize: '96px',
          lineHeight: '110.53px',
          fontWeight: '700',
          textTransform: 'uppercase',
        },
        '.text-heading2': {
          fontSize: '72px',
          lineHeight: '82.9px',
          fontWeight: '700',
          textTransform: 'uppercase',
        },
        '.text-overline': {
          fontSize: '10px',
          lineHeight: '12.02px',
          fontWeight: '700',
          textTransform: 'uppercase',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
export default config
