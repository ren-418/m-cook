import FilterSection from "./FilterSection";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/FilterSection',
    component: FilterSection,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onOrderBy: {

        },
        onFilter: {

        }
    },
} satisfies Meta<typeof FilterSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilterSectionDefault: Story = {
    render: () => <div className="w-[400px]"><FilterSection /></div>,
};
