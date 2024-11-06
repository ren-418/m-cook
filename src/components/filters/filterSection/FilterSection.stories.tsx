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
        text: {
            control: 'text',
        },
        onOrderBy: {},
        onFilter: {}
    },
} satisfies Meta<typeof FilterSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilterSectionDefault: Story = {
    args: {
        text: 'Text',
        onOrderBy: () => {},
        onFilter: () => {}
    },
};
