import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import { QueryParams } from '../types';


export function useQueryParams() {
    const [searchParams, setSearchParams] = useSearchParams();

    const getParams = (): QueryParams => {
        const params: QueryParams = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    };

    const updateParams = useCallback(
        (newParams: QueryParams) => {
            const updatedParams = new URLSearchParams(searchParams);
            Object.entries(newParams).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    updatedParams.set(key, value);
                } else {
                    updatedParams.delete(key);
                }
            });

            setSearchParams(updatedParams, { replace: true });
        },
        [searchParams, setSearchParams]
    );

    return { getParams, updateParams };
}
