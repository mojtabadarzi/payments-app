import { IconX } from "@tabler/icons-react";

type ErrorProps = { snackbarMessage: string | null, onCloseErrorMessage: () => void }
export const ErrorBox = ({ snackbarMessage, onCloseErrorMessage }: ErrorProps) => {
    if (!snackbarMessage) return null;

    return <div className="flex items-center justify-between gap-2 bg-red-100 min-w-[320px] 
            fixed bottom-4 left-1/2 transform -translate-x-1/2 text-red-500 p-4 rounded-xl shadow-md z-50">
        {snackbarMessage}
        <IconX stroke={2} size={16} className="text-red-500" onClick={onCloseErrorMessage} />
    </div>

}