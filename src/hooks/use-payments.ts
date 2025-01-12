import { useQuery } from 'react-query';
import apiClient from '../services/api-client';
import { PaymentsResponse } from '../types/payment';
import { useQueryParams } from '../utils';
import { useCallback, useEffect, useState } from 'react';

export const usePayments = () => {
    const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
    const { getParams, updateParams } = useQueryParams();
    const params = getParams();
    const [search, setSearch] = useState(params?.search || "");

    const params_ = {
        search: params.search,
        type: params.type,
        status: params.status,
        page: params.page || 1,
        limit: params?.limit || 0,
    }

    const { data, isLoading, refetch, error } = useQuery(
        ['payments', params_],
        async () => {
            const response = await apiClient.get<PaymentsResponse>('/payments', { params });
            return response.data;
        },
        {
            onError: () => setSnackbarMessage('Error loading data, retrying...'),
            onSuccess: () => onCloseErrorMessage()
        }
    );

    useEffect(() => {
        if (!params.page) {
            updateParams({ page: '1' });
        }
    }, [params.page, updateParams]);

    const onCloseErrorMessage = useCallback(() => {
        setSnackbarMessage(null);
    }, []);

    const onClearFilter = useCallback(() => {
        setSearch("");
        updateParams({ page: "1", status: "", type: "", search: "" });
    }, [updateParams]);

    return {
        isLoading, data, snackbarMessage, onCloseErrorMessage, params, updateParams, setSearch,
        search, onClearFilter, refetch, error
    }

};
