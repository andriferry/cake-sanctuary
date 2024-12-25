export { default as Card } from './Card.vue'
export { default as CardContent } from './CardContent.vue'
export { default as CardDescription } from './CardDescription.vue'
export { default as CardFooter } from './CardFooter.vue'
export { default as CardHeader } from './CardHeader.vue'
export { default as CardTitle } from './CardTitle.vue'
import { cva, type VariantProps } from 'class-variance-authority'

export const cardVariant = cva(
  'rounded-xl bg-card text-card-foreground',
  {
    variants: {
      variant: {
        default:
          'drop-shadow-xl',
        flat:
          'shadow-none',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type CardVariant = VariantProps<typeof cardVariant>
