import NavBar from "./NavBar";

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'UI/Footer/Navbar',
  component: NavBar,

  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    currentPage: {
      control: { type: 'number', min: 0, max: 4 },
      defaultValue: 0,
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainNavbar: Story = {
  args: {
    currentPage: 0,
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <NavBar {...args} />
    </div>
  ),
};

