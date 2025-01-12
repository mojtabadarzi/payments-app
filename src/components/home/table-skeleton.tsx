
const Skeleton = () => (
    <tr>
        <td className="px-2 py-6  text-center">
            <div className="animate-pulse bg-gray-200 h-4 w-12 mx-auto rounded" />
        </td>
        <td className="px-2 py-4">
            <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
        </td>
        <td className="px-2 py-6 text-center">
            <div className="animate-pulse bg-gray-200 h-4 w-16 mx-auto rounded" />
        </td>
        <td className="px-2 py-6 text-center">
            <div className="animate-pulse bg-gray-200 h-4 w-20 mx-auto rounded" />
        </td>
        <td className="px-2 py-6 text-center">
            <div className="animate-pulse bg-gray-200 h-4 w-20 mx-auto rounded" />
        </td>
        <td className="px-2 py-6 text-center">
            <div className="animate-pulse bg-gray-200 h-4 w-24 mx-auto rounded" />
        </td>
        <td className="px-2 py-6 text-center">
            <div className="animate-pulse bg-gray-200 h-4 w-16 mx-auto rounded" />
        </td>
    </tr>
);

export const TableSkeleton = () => (
    <tbody>
        {Array.from({ length: 10 }, (_, index) => (
            <Skeleton key={index} />
        ))}
    </tbody>
);
