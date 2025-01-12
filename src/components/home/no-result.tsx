import { IconReload, IconSearch, IconX } from "@tabler/icons-react";
import { useHomeContext } from "../../contexts/use-home-context";

export const NoResult = ({ width }: { width: number }) => {
    const { params, onClearFilter, error, refetch, onCloseErrorMessage } = useHomeContext()
    const { type, search, status } = params || {}
    const showClearFilter = !error && (type || status || search)

    const onRefetch = () => {
        onCloseErrorMessage()
        refetch && refetch()
    }

    return <div className="h-[320px] flex flex-col justify-center items-center" style={{ width }}> {/*i kkow its a bad practice :)*/}
        <IconSearch stroke={2} size={36} className="text-gray-400" />
        <span className="text-gray-400 text-2xl font-semibold mt-1">No Results</span>
        {showClearFilter && <button className="text-base font-normal flex justify-center items-center mt-4 gap-1 
            py-1 px-3 rounded-2xl border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white
            transition hover:border-transparent group sm:text-lg"
            onClick={onClearFilter}
        >
            <IconX stroke={2} size={20} className="text-gray-900 group-hover:text-white transition" />
            Clear Filter
        </button>}

        {Boolean(error) && <button className="text-base font-normal flex justify-center items-center mt-4 gap-1 
            py-1 px-3 rounded-2xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white
            transition hover:border-transparent group sm:text-lg"
            onClick={onRefetch}
        >
            <IconReload stroke={2} size={20} className="text-blue-500 group-hover:text-white transition" />
            Refetch
        </button>}

    </div>
}