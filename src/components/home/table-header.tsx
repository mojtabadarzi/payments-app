import { memo } from "react";

export const TableHeader = memo(({ label, align = "" }: { label: string, align?: string }) => (
    <th className={`text-sm tracking-wider font-normal text-gray-600 p-2 ${align ?? align}`}>{label}</th>
))