import { IconSearch } from "@tabler/icons-react";
import { ChangeEvent } from "react";
import { useHomeContext } from "../../contexts/use-home-context";
import { useDebounce } from "../../hooks";


export const SearchBox = () => {
    const { search, setSearch, updateParams, isLoading } = useHomeContext();
    const noActiveInput = isLoading && !search

    const debouncedSearch = useDebounce((value: string) => {
        updateParams({ page: "1", search: value });
    }, 300);

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        debouncedSearch(e.target.value);
    };

    return <div className="border border-gray-200 rounded-xl relative h-10">
        {noActiveInput && <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 
            right-0 bg-white/50 rounded-xl" />}
        <IconSearch stroke={2} size={16} className="text-gray-400 absolute translate-x-[10px] translate-y-[11px]" />
        <input
            type="text"
            placeholder="Search by description"
            value={search}
            onChange={onSearch}
            className="bg-transparent text-gray-800 placeholder:text-gray-400 w-full 
            sm:w-48 pl-8 h-full rounded-xl outline-none text-sm transition-all 
            focus:bg-white sm:focus:w-64"
        />
    </div>
}