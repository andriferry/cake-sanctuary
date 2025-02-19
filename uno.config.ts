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
    presetShadcn({ color: 'slate' }),
    presetAnimations(),
  ],

  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|html)($|\?)/,
        // include js/ts files
        '(components|src)/**/*.{js,ts}',
      ],
    },
  },

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
