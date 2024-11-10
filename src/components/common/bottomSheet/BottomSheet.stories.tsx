import { Meta, StoryObj } from "@storybook/react";
import BottomSheet from "./BottomSheet";
import { useState } from "react"; // Asegúrate de que la ruta sea correcta

const meta = {
    title: 'Components/BottomSheet',
    component: BottomSheet,
    parameters: {
        layout: 'centered', // Esto asegura que el componente esté centrado en la vista
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: 'boolean',
        },
        onClose: {
            action: 'closed', // Esto genera una acción llamada "closed" en el panel de controles
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

        // Función para cerrar el bottom sheet
        const handleClose = () => {
            setIsOpen(false);
            args.onClose(); // Llamar a la función onClose pasada por args
        };

        return (
            <div className="w-full h-screen flex justify-center items-center bg-gray-100">
                {/* Botón para abrir el BottomSheet */}
                <button onClick={() => setIsOpen(true)} className="mb-4 p-2 bg-blue-500 text-white rounded">
                    Open BottomSheet
                </button>

                {/* Renderizar el BottomSheet */}
                <div className="w-[390px] h-[444px]">
                    <BottomSheet {...args} isOpen={isOpen} onClose={handleClose} />
                </div>
            </div>
        );
    },
};
