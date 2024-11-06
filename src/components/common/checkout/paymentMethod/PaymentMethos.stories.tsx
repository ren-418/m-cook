import PaymentMethod from "./PaymentMethod";

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'Common/paymentMethod',
  component: PaymentMethod,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
  },
} satisfies Meta<typeof PaymentMethod>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PaymentMethodDefault: Story = {
  args: {

  },
};

