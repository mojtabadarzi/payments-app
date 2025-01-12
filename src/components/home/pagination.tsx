import { ItemsPerPageSelector } from './item-per-page-selector';
import { PaginationControl } from './pagination-control';
import { ResultsSummary } from './results-summary';

export const Pagination = () => {
    return <>
        <div className='hidden my-4 sm:flex flex-col sm:flex-row justify-between items-center gap-4'>
            <ResultsSummary />
            <PaginationControl />
            <ItemsPerPageSelector />
        </div>
        <div className="flex my-4 sm:hidden flex-col sm:flex-row justify-between items-center gap-2">
            <PaginationControl />
            <div className="flex justify-between items-center w-full">
                <ResultsSummary />
                <ItemsPerPageSelector />
            </div>
        </div>
    </>
};
