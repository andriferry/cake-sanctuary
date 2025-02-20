import {
  defineConfig,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetAnimations } from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  presets: [
    presetTypography(),
    presetWind3({ dark: 'class' }),
    presetShadcn({ color: 'slate' }, true),
    presetAnimations(),
  ],

  content: {
    pipeline: {
      include: [
        './components/**/*.{js,vue,ts}',
        './components/ui/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
      ],
    },
  },

  theme: {
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      success: 'hsl(var(--success))',
      warning: 'hsl(var(--warning))',
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      sidebar: {
        /// We need to remove this sidebar color, And also just created a few basic colors
        'DEFAULT': 'hsl(var(--sidebar-background))',
        'foreground': 'hsl(var(--sidebar-foreground))',
        'primary': 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
        'accent': 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        'border': 'hsl(var(--sidebar-border))',
        'ring': 'hsl(var(--sidebar-ring))',
      },
    },

    borderRadius: {
      xl: 'calc(var(--radius) + 4px)',
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
  },

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
