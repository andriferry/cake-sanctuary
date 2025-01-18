import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

const meta = {
    title: 'Button',
    component: Button,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
    args: {},
};
