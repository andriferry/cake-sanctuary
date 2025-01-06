import { cva, type VariantProps } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const variants = {
    variant: {
        default:
            'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
            'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent',
        secondary:
            'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90',
        ghost: 'hover:bg-accent/60',
        link: 'text-primary underline-offset-4 hover:underline',
        plain: 'bg-transparent',
    },
    size: {
        default: 'h-9 px-4 py-2',
        xs: 'size-7 rounded-md px-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9',
        full: 'w-full p-2 rounded-md',
    },
    rounded: {
        default: 'rounded-md',
        rounded: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
    },
};

export const buttonVariants = cva(
    'inline-flex items-center transition-all duration-300 ease-in-out text-secondary relative justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants,
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
