import { useQuery } from 'react-query';
import apiClient from '../services/api-client';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Payment } from '../types/payment';



export const usePaymentDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

    const { data, isLoading } = useQuery(
        ['paymentDetails', id],
        async ({ signal }) => {
            const response = await apiClient.get<Payment>(`/payments/${id}`, { signal });
            return response.data;
        },
        {
            onError: () => setSnackbarMessage('Error loading data, retrying...'),
            onSuccess: () => onCloseErrorMessage()
        }
    );

    const onCloseErrorMessage = () => setSnackbarMessage(null)

    return { data, isLoading, snackbarMessage, onCloseErrorMessage }
};
