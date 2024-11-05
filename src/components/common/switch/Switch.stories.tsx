import Switch from "./Switch";

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
    title: 'Common/Switch',
    component: Switch,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        left: {
            control: { type: 'object' },
            defaultValue: { label: 'Text 1', value: 0 },
        },
        right: {
            control: { type: 'object' },
            defaultValue: { label: 'Text 2', value: 1 },
        },
        onChange: {
            action: 'changed',
        },
    },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchDefault: Story = {
    args: {
        left: { label: 'Text 1', value: 0 },
        right: { label: 'Text 2', value: 1 },
        onChange: () => {},
    },
    render: (args) => (
        <div style={{ width: '400px' }}>
          <Switch {...args} />
        </div>
      ),
};
