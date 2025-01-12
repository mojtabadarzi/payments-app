import { PaymentType } from '../../types/payment';

const typeClass = {
    salary: 'text-green-700',
    bonus: 'text-yellow-700',
    commission: 'text-blue-700',
    transportation: 'text-purple-700',
    overtime: 'text-orange-700',
    default: 'text-gray-700'
}

const dotColor = {
    salary: 'bg-green-700',
    bonus: 'bg-yellow-700',
    commission: 'bg-blue-700',
    transportation: 'bg-purple-700',
    overtime: 'bg-orange-700',
    default: 'bg-gray-700'
}

export const TypeBadge = ({ type }: { type?: PaymentType }) => {
    return (
        <span
            className={`flex items-center gap-1 py-1 text-xs sm:text-sm font-bold ${typeClass[type || "default"]}`}
        >
            <span
                className={`inline-block w-1 h-1 rounded-full ${dotColor[type || "default"]}`}
            ></span>
            {type ? (type?.charAt(0)?.toUpperCase() || "") + (type?.slice(1) || "") : "Unknown"}
        </span>
    );
};
