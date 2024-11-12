import FilterSection from "./FilterSection";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Components/FilterSection',
    component: FilterSection,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onOrderBy: {},
        onFilter: {},
    },
} satisfies Meta<typeof FilterSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilterSectionDefault: Story = {
    args: {
        text: 'Order by',
        onOrderBy: () => console.log('Order by clicked'),
        onFilter: () => console.log('Filter clicked'),
    },
    render: (args) => <div className="w-[400px]"><FilterSection {...args} /></div>,
};