
import SearchBar from './searchBar';
import type { Meta, StoryObj } from '@storybook/react';
import SeachBar from './searchBar';

const meta = {
  title: 'common/SearchBar',
  component: SearchBar,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    isSelector: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof SeachBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicSearchBar: Story = {
  args: {
    isSelector: false,
    placeholder: 'Search something'
  },

  render: (args) => (
    <div style={{ width: '500px', height: '500px' }}>
      <SeachBar {...args} />
    </div>
  )

};
