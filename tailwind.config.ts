
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './content/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'subtitle': ['var(--font-subtitle)', 'ui-sans-serif', 'system-ui'],
        'header': ['var(--font-header)', 'ui-serif', 'Georgia'],
        'title': ['var(--font-title)', 'ui-serif', 'Georgia'],
        'body': ['var(--font-body)', 'ui-serif', 'Georgia'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#d1adb7",
          "secondary": "#799dde",
          "accent": "#262626",
          "neutral": "#fff",
          "base-100": "#FFFFFF",
          "base-content": "#000",
          "info": "#0070F3",
          "success": "#21CC51",
          "warning": "#FF6154",
          "error": "#DE1C8D",
        },
      },
    ],
  },
}
export default config
