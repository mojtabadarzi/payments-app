import { useState, useRef, useEffect, memo } from "react";
import { IconChevronUp, IconChevronDown, IconX } from "@tabler/icons-react";
import clsx from "clsx";
import { capitalizeFirstLetter } from "../../utils";

type DropdownProps<T> = {
    value?: T;
    onChange: (value: T) => void;
    options: T[];
    placeholder?: string;
    icon?: React.ReactElement;
    classname?: string;
    isLoading?: boolean;
};

export const Dropdown = memo(<T extends string | number>({
    value,
    onChange,
    options,
    placeholder = "Select an option",
    icon,
    classname,
    isLoading = false,
}: DropdownProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option: T) => {
        onChange(option);
        onClose();
    };

    const onClose = () => setIsOpen(false);

    const onToggle = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            ref={dropdownRef}
            className={clsx(
                "relative w-full sm:w-40 h-10 border border-gray-200 rounded-xl",
                { "bg-white": isOpen },
                classname
            )}
        >
            {isLoading && (
                <div className="flex p-2 justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-white/50 rounded-xl" />
            )}
            <button
                onClick={onToggle}
                className="w-full p-2 flex justify-between items-center rounded text-sm gap-2"
            >
                <p className="flex items-center gap-1">
                    {icon}
                    {value ? (
                        <span className="text-gray-800 font-bold">{capitalizeFirstLetter(value.toString())}</span>
                    ) : (
                        <span className="text-gray-400">{placeholder}</span>
                    )}
                </p>
                {/* open close icon */}
                {isOpen ? (
                    <IconChevronUp
                        stroke={2}
                        size={16}
                        className={clsx({ "text-gray-800": value, "text-gray-400": !value })}
                    />
                ) : (
                    <IconChevronDown
                        stroke={2}
                        size={16}
                        className={clsx({ "text-gray-800": value, "text-gray-400": !value })}
                    />
                )}
            </button>
            {/* mobile */}
            {isOpen && (
                <>
                    <div
                        className="sm:hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center 
                                    z-50 transition-opacity duration-300 animate-fade-in"
                        onClick={onClose}
                    >
                        <div
                            className="bg-white w-full max-w-md rounded-2xl shadow-lg p-4 transform scale-95 transition-transform
                                        duration-300 animate-slide-up relative"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-center">{placeholder}</h3>
                            <ul className="max-h-64 overflow-auto flex flex-col gap-1">
                                {options?.map((option: T) => (
                                    <li
                                        key={option}
                                        onClick={() => handleOptionClick(option)}
                                        className={clsx(
                                            "text-sm p-2 py-3 rounded-xl cursor-pointer hover:bg-blue-100 text-center",
                                            {
                                                "bg-blue-100 text-blue-500 font-semibold":
                                                    value !== "" && value === option,
                                            }
                                        )}
                                    >
                                        {option
                                            ? capitalizeFirstLetter(option.toString())
                                            : "None"}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={onClose}
                                className="absolute top-3 left-4 text-gray-800 w-8 h-8"
                            >
                                <IconX stroke={2} className="text-gray-800" />
                            </button>
                        </div>
                    </div>
                    {/* desktop */}
                    <ul
                        className="hidden sm:flex flex-col gap-1 absolute left-0 right-0 bg-white border rounded-xl shadow mt-1 z-10 
                            max-h-48 overflow-auto transition-opacity duration-300 transition-transform transform origin-top 
                            animate-slide-down p-1"
                    >
                        {options?.map((option: T) => (
                            <li
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                className={clsx(
                                    "text-sm font-semibold rounded-xl p-2 cursor-pointer hover:bg-blue-100 hover:text-blue-500",
                                    {
                                        "bg-blue-100 text-blue-500 font-semibold":
                                            value !== "" && value === option,
                                    }
                                )}
                            >
                                {option
                                    ? option
                                        ?.toString()
                                        ?.charAt(0)
                                        .toUpperCase() + option?.toString()?.slice(1)
                                    : "None"}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
});
