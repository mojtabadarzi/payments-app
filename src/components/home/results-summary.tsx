import { useHomeContext } from "../../contexts/use-home-context";

export const ResultsSummary = () => {
    const { data, params } = useHomeContext()
    const limit = Number(params?.limit) || 10
    const totalItems = Number(data?.total) || 0
    const totalPage = Math.ceil(totalItems / limit)
    const currentPage = Number(params?.page) || 1

    if (totalItems === 0) return <span />
    const a = (currentPage - 1) * limit + 1
    const b = currentPage === totalPage ? totalItems : currentPage * limit

    return <span className="text-xs sm:text-sm font-semibold text-gray-400">showing {a} - {b} of {totalItems} results</span>
}
