
import AddToCartFooter from './AddToCartFooter';
import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'UI/Footer/AddToCartFooter',
  component: AddToCartFooter,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {

    label: {
      control: 'select',
      defaultValue: 'Total',
      options: ['Total', 'Subtotal'],
    },
    currency: {
      control: 'select',
      options: ['USD', 'EUR', 'GBP', 'ARS'],
    },
    actualPrice: {
      control: { type: 'number', min: 1 },
      defaultValue: 100,
    },
    discount: {
      control: { type: 'number', min: 0 },
      defaultValue: 50,

    },
  }
} satisfies Meta<typeof AddToCartFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySolidLg: Story = {
  args: {
    label: 'Total',
    currency: 'USD',
    actualPrice: 100,
    discount: 50,
  },

  render: (args) => (
    <div style={{ width: '500px' }}>
      <AddToCartFooter {...args} />
    </div>)
};

