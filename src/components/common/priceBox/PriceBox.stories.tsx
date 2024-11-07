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
      defaultValue: 100,
    },
    discount: {
      control: { type: 'number', min: 0 },
      defaultValue: 100,
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
    actualPrice: 100,
    discount: 50,
    inline: true,
  },

  render: (args) => (
    <div style={{ width: '134px' }}>
      <PriceBox {...args} />
    </div>
  )

};
