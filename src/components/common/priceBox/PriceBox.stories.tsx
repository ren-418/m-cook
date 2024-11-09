import PriceBox from './PriceBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'common/PriceBox',
  component: PriceBox,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    currency: {
      control: 'select',
      options: ['USD', 'EUR', 'GBP', 'ARS'],
    },
    actualPrice: {
      control: { type: 'number', min: 1 },
      defaultValue: 2500,
    },
    discount: {
      control: { type: 'number', min: 0 },
      defaultValue: 20,
    },
    inline: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof PriceBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PriceBoxDefault: Story = {
  args: {
    currency: 'USD',
    actualPrice: 2500,
    discount: 20,
    inline: true,
  },

  render: (args) => (
    <div style={{ width: '134px' }}>
      <PriceBox {...args} />
    </div>
  )

};
