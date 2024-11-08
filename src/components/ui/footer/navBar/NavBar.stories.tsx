import NavBar from "./NavBar";

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'UI/Footer/Navbar',
  component: NavBar,

  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainNavbar: Story = {
  render: (args) => (
    <div style={{ width: '500px' }}>
      <NavBar {...args} />
    </div>
  ),
};

