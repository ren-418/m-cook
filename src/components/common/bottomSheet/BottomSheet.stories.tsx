import { Meta, StoryObj } from "@storybook/react";
import BottomSheet from "./BottomSheet";
import { useState } from "react";
import DragHandle from "../../../icons/BottomSheet/DragHandle";

const meta = {
    title: 'Components/BottomSheet',
    component: BottomSheet,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: 'boolean',
        },
        onClose: {
            action: 'closed',
        },
    },
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(args.isOpen);

        const handleClose = () => {
            setIsOpen(false);
            args.onClose();
        };

        return (
            <div className="w-full flex justify-center items-center bg-gray-100">
                {!isOpen && (
                    <div className="w-[390px] h-[36px] flex justify-center items-center absolute bottom-0 left-0 right-0 mx-auto p-2 bg-blue-500 text-white rounded cursor-pointer" onClick={() => setIsOpen(true)}>
                        <DragHandle />
                    </div>
                )}
                <div className="w-[390px] h-[444px]">
                    <BottomSheet {...args} isOpen={isOpen} onClose={handleClose} />
                </div>
            </div>
        );
    },
};