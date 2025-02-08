import type { Meta, StoryObj } from '@storybook/vue3'

import { Card, CardContent, CardFooter } from './index'

const meta = {
  title: 'Component/Card',
  component: Card,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'flat', 'destructive', 'outline'],
    },
    subtitle: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    class: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => ({
    components: { Card, CardContent, CardFooter },
    template: `
            <Card v-bind="args">
                <CardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                    consequatur tempora quia repudiandae incidunt. Dolorum facere a
                    mollitia blanditiis sed, minus harum, alias suscipit possimus
                    voluptates, atque ullam illum unde.
                </CardContent>
            
                <CardFooter>
                    <Button> Card Footer </Button>
                </CardFooter>
            </Card>
        `,
  }),
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    class: '',
  },
  // name: 'Card Basic',
  // args: {
  //     title: 'Card Title',
  //     subtitle: 'Card Subtitle',
  //     class: '',
  // },
}

// export const ManyItems: Story = {
//     render: (args) => ({
//         components: { List, ListItem },
//         setup() {
//             return { ...args };
//         },
//         template: `
//         <List v-bind="args">
//           <list-item :isSelected="Selected"/>
//           <list-item :isSelected="Unselected"/>
//           <list-item :isSelected="Unselected"/>
//         </List>`,
//     }),
//     // args: {
//     //     Selected: Selected.args.isSelected,
//     //     Unselected: Unselected.args.isSelected,
//     // },
// };
