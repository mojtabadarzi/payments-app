import { memo } from "react";
import { useHomeContext } from "../../contexts/use-home-context";
import { Dropdown } from "./drop-down";

export const ItemsPerPageSelector = memo(() => {
    const { isLoading, params, updateParams } = useHomeContext()
    const limit = Number(params?.limit) || 10
    const pages: number[] = [10, 20, 30, 40, 50];

    const onChange = (value: string | number) => {
        updateParams({ page: "1", limit: value.toString() })
    }

    return <div className="flex items-center gap-1 order-3">
        <span className="text-xs sm:text-sm font-semibold text-gray-400">Items per page</span>
        <Dropdown
            value={limit}
            onChange={onChange}
            options={pages}
            placeholder="Item Per Page"
            classname="!w-16"
            isLoading={isLoading}
        />
    </div>
})
