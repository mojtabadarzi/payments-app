import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useHomeContext } from "../../contexts/use-home-context";
import clsx from "clsx";

export const PaginationControl = () => {
    const { data, params, updateParams } = useHomeContext()
    const limit = Number(params?.limit) || 10
    const totalItems = Number(data?.total) || 0
    const totalPage = Math.ceil(totalItems / limit)
    const currentPage = Number(params?.page) || 1

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPage) {
            updateParams({ page: page.toString() });
        }
    };

    return totalItems === 0 ? <span /> : <div className="flex items-center">
        <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={clsx(
                "p-4 py-1 mx-1 font-thin text-xl transition",
                {
                    "text-gray-200 cursor-not-allowed": currentPage === 1,
                    "text-gray-800 hover:opacity-60": currentPage > 1,
                }
            )}
        >
            <IconChevronLeft stroke={2} />
        </button>
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (<button
            key={page}
            onClick={() => handlePageChange(page)}
            className={clsx(
                "w-10 h-10 mx-1 text-base hover:opacity-60 transition",
                {
                    "text-blue-500 text-lg font-bold": page === currentPage,
                    "text-gray-800 font-semibold": page !== currentPage,
                }
            )}
        >
            {page}
        </button>
        ))}
        <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPage}
            className={clsx(
                "p-4 py-1 mx-1 font-thin text-xl transition",
                {
                    "text-gray-200 cursor-not-allowed": currentPage === totalPage,
                    "text-gray-800 hover:opacity-60": currentPage < totalPage,
                }
            )}
        >
            <IconChevronRight stroke={2} />
        </button>
    </div>
}