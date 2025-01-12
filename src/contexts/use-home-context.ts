import { createContext, useContext } from 'react';
import { PaymentsResponse, QueryParams } from '../types';

export type HomeContextProps = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    data: PaymentsResponse | undefined
    params: QueryParams;
    updateParams: (newParams: QueryParams) => void;
    onClearFilter: () => void;
    refetch?: () => void;
    error?: unknown;
    onCloseErrorMessage: () => void
}

export const HomeContext = createContext<HomeContextProps | undefined>(undefined);

export const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error('useHomeContext must be used within an HomeProvider');
    }
    return context;
};
