import { PaymentStatus } from '../../types/payment';

const statusClass: Record<string, string> = {
    success: "bg-green-100 text-green-500",
    pending: "bg-yellow-100 text-yellow-500",
    failed: "bg-red-100 text-red-500",
}
export const Status = ({ status = 'pending' }: { status?: PaymentStatus }) => {
    return (
        <span className={`${statusClass[status]} text-xs sm:text-sm font-bold rounded-xl px-2 py-1`}>
            {status}
        </span>
    );
}