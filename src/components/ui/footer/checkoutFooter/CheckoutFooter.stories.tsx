
import CheckoutFooter from './CheckoutFooter';
import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'UI/Footer/CheckoutFooter',
  component: CheckoutFooter,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {

    label: {
      control: 'text',
      defaultValue: 'Total',
      options: ['Total', 'Subtotal'],
    },
    currency: {
      control: 'select',
      options: ['USD', 'EUR', 'GBP', 'ARS'],
    },
    total: {
      control: 'number',
      defaultValue: 100,
    },
    callToAction: {
      control: 'text',
      defaultValue: 'Checkout',
    },

  },
} satisfies Meta<typeof CheckoutFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySolidLg: Story = {
  args: {
    label: 'Total',
    currency: 'USD',
    total: 100,
    callToAction: 'Checkout',
    onSubmit: () => { },
  },

  render: (args) => (
    <div style={{ width: '500px' }}>
      <CheckoutFooter {...args} />
    </div>)
};

