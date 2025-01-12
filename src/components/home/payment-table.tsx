import { Payment } from '../../types/payment';
import { useNavigate } from 'react-router-dom';
import { NoResult } from './no-result';
import { TableSkeleton } from './table-skeleton';
import { TableHeader } from './table-header';
import { useHomeContext } from '../../contexts/use-home-context';
import { useLayoutEffect, useRef, useState } from 'react';
import { TABLE_HEADER_LIST } from '../../constants';
import { TypeBadge } from '../common/type-badg';
import { Status } from '../common/status';
import { NotAssign } from '../common/not-assign';
import { convertToShortDate } from '../../utils';

export const PaymentTable = () => {
    const { isLoading, data } = useHomeContext();
    const navigate = useNavigate();
    const headerRef = useRef<HTMLTableSectionElement | null>(null);
    const [headerWidth, setHeaderWith] = useState(900)

    useLayoutEffect(() => {
        if (headerRef?.current) setHeaderWith(headerRef?.current?.offsetWidth)
    }, [])

    const handleRowClick = (id: string) => {
        navigate(`/payments/${id}`);
    };

    return (
        <section className="w-full overflow-x-scroll border-b">
            <table className="min-w-[900px] max-w-[1024px] w-full">
                <thead ref={headerRef}>
                    <tr className='border-b'>
                        {TABLE_HEADER_LIST?.map((item) => <TableHeader key={item?.label} label={item?.label} align={item?.align} />)}
                        <th />
                    </tr>
                </thead>
                {isLoading ? <TableSkeleton />
                    : <tbody>
                        {data?.entities?.map((payment: Payment) => {
                            const { id, description, type, status, value, paid_at } = payment || {}

                            return <tr
                                key={id}
                                onClick={() => handleRowClick(id)}
                                className="cursor-pointer hover:bg-gray-100/20 transition"
                            >
                                <td className="text-xs font-semibold text-gray-400 px-2 py-4 text-center rounded-tl-2xl rounded-bl-2xl">{id}</td>
                                <td className="text-xs sm:text-sm px-2 py-4 font-bold">{description || <NotAssign />}</td>
                                <td className="text-xs px-2 py-4">{<TypeBadge type={type} />}</td>
                                <td className="text-xs px-2 py-4 text-center"><Status status={status} /></td>
                                <td className="text-xs px-2 py-4 text-center font-bold">${value?.toLocaleString() || <NotAssign />}</td>
                                <td className="text-xs px-2 py-4 text-center text-gray-400 font-semibold">{paid_at ? convertToShortDate(paid_at) : <NotAssign />}</td>
                                <td className="text-xs px-2 py-4 text-center rounded-tr-2xl rounded-br-2xl">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/payments/${id}`);
                                        }}
                                        className="text-blue-500 font-medium px-4 py-2 rounded-xl transition hover:bg-blue-500 hover:text-white"
                                    >
                                        Details
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>}
            </table>
            {!isLoading && (!data || data?.entities?.length === 0) ? <NoResult width={headerWidth} /> : ''}
        </section>
    );
}
