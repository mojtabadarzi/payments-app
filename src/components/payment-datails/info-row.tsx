import { NotAssign } from "../common/not-assign";

type InfoRowProps = {
    label: string;
    value?: React.ReactNode;
    isLoading: boolean;
    isBadge?: boolean;
    border?: boolean;
}

export const InfoRow = ({ label, value, isLoading, isBadge = false, border = true }: InfoRowProps) => {
    return <div className={`${border && "border-b"} flex justify-between items-center gap-2 py-4`}>
        <span className="text-sm sm:text-base text-gray-500 block">{label}</span>
        {isLoading ? (
            <div className="animate-pulse bg-gray-200 h-4 w-24 rounded" />
        ) : (
            isBadge ? value : <p className="text-base sm:text-lg font-bold text-gray-800">{value ?? <NotAssign />}</p>
        )}
    </div>
}