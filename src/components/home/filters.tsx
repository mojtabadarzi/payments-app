import { PaymentStatus, PaymentType } from "../../types/payment";
import { IconTag, IconCreditCard, IconFilterX } from "@tabler/icons-react";
import { SearchBox } from "./search-box";
import { useHomeContext } from "../../contexts/use-home-context";
import { PAYMENT_STATUSES, PAYMENT_TYPES } from "../../constants";
import { memo, useCallback } from "react";
import { Dropdown } from "./drop-down";

export const Filters = memo(() => {
    const { search, updateParams, onClearFilter, isLoading, params } = useHomeContext();

    const onChangeFilter = useCallback(
        (key: "type" | "status", value: string | number) => {
            updateParams({ page: "1", [key]: value.toString() });
        },
        [updateParams]
    );

    const hasActiveFilters = Boolean(search || params?.type || params?.status);

    return (
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4 p-3 bg-gray-50 z-10 rounded-[1.4rem] gap-2 sticky top-3">
            <SearchBox />
            <div className="flex flex-col sm:flex-row gap-2">
                <Dropdown
                    value={params?.type as PaymentType}
                    onChange={(value) => onChangeFilter("type", value)}
                    options={PAYMENT_TYPES}
                    placeholder="Select a type"
                    icon={<IconCreditCard stroke={2} size={20} className={`${params?.type ? "text-gray-800" : "text-gray-400"}`} />}
                    isLoading={isLoading}
                />
                <div className="flex items-center gap-1">
                    <Dropdown
                        value={params?.status as PaymentStatus}
                        onChange={(value) => onChangeFilter("status", value)}
                        options={PAYMENT_STATUSES}
                        placeholder="Select a status"
                        icon={<IconTag stroke={2} size={20} className={`${params?.status ? "text-gray-800" : "text-gray-400"}`} />}
                        isLoading={isLoading}
                    />
                    {hasActiveFilters && <button disabled={isLoading} className="disabled:cursor-not-allowed">
                        <IconFilterX className="text-gray-800 hover:text-gray-400 transition" onClick={onClearFilter} />
                    </button>}
                </div>
            </div>
        </div>
    );
})
