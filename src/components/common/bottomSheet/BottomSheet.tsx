import React, { useEffect } from 'react';
import OrderByItem from "../../orderByItem/OrderByItem";
import CheckBoxItem from "../checkBoxItem/CheckBoxItem";

// Interfaz para las propiedades del BottomSheet
interface BottomSheetProps {
    isOpen: boolean;  // Propiedad booleana para abrir o cerrar el Bottom Sheet
    onClose: () => void;  // Función que se ejecuta al cerrar el Bottom Sheet
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (!isOpen) {
            // Lógica adicional si es necesario cuando el BottomSheet se cierra
        }
    }, [isOpen]);

    // Función para cerrar el BottomSheet
    const handleClose = () => {
        onClose(); // Llamar a la función onClose pasada por props
    };

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-20 flex justify-center items-end p-0 ${isOpen ? 'visible' : 'invisible'}`}
            onClick={handleClose}  // Cierra el bottom sheet cuando se hace clic fuera de él
        >
            {/* Contenedor del Bottom Sheet */}
            <div
                className={`flex flex-col items-center p-[10px_16px] gap-5 absolute w-[390px] left-0 top-[36px] transition-all duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                onClick={(e) => e.stopPropagation()}  // Evita que el clic dentro del Bottom Sheet cierre el componente
            >

                {/* Sheet Header (Drag Handle) */}
                <div
                    className="flex flex-col items-center gap-2 w-full absolute top-0"
                    style={{ paddingTop: '16px', paddingBottom: '12px', zIndex: 10 }}
                >
                    <DragHandle onClick={() => onClose()} />
                </div>

                {/* Sort By Section */}
                <div className="flex flex-col items-start gap-4 w-[358px] h-[175px]">
                    <h2 className="text-lg font-semibold text-left">Sort By</h2>
                    <OrderByItem criteria="Quality" index={0} onClick={() => {}} />
                    <OrderByItem criteria="Price" index={1} onClick={() => {}} />
                    <OrderByItem criteria="Location" index={2} onClick={() => {}} />
                </div>

                {/* Filter By Section */}
                <div className="flex flex-col items-start gap-5 w-[358px] h-[175px]">
                    <h2 className="text-lg font-semibold text-left">Filter By</h2>
                    <div className="grid grid-cols-3 gap-4 w-[358px] h-[96px]">
                        <div className="flex-none">
                            <CheckBoxItem title="Filter" />
                        </div>
                        <div className="flex-none">
                            <CheckBoxItem title="Vegan" />
                        </div>
                        <div className="flex-none">
                            <CheckBoxItem title="Sweet" />
                        </div>
                        <div className="flex-none">
                            <CheckBoxItem title="Vegetarian" />
                        </div>
                        <div className="flex-none">
                            <CheckBoxItem title="Low Calories" />
                        </div>
                        <div className="flex-none">
                            <CheckBoxItem title="Savory" />
                        </div>
                        <div className="flex-none">
                            <CheckBoxItem title="Gluten Free" />
                        </div>
                        <div className="flex-none">
                            <CheckBoxItem title="Spicy" />
                        </div>
                        <div className="flex-none">
                            <CheckBoxItem title="Organic" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Fondo oscuro para cerrar el bottom sheet */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
    );
};

export default BottomSheet;

// Componente DragHandle que muestra el icono de arrastre
const DragHandle: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            {/* SVG de arrastre */}
            <svg width="32" height="4" viewBox="0 0 32 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="4" rx="2" fill="#AEB3B8" />
            </svg>
        </div>
    );
};
