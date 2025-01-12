import { usePayments } from '../hooks';
import { ErrorBox } from '../components/common/error-box';
import { HomeProvider } from '../providers/home-provider';
import { Filters, Layout, Pagination, PaymentTable } from '../components';

const HomePage = () => {
    const { snackbarMessage, onCloseErrorMessage, isLoading, data, params, search,
        setSearch, onClearFilter, updateParams, refetch, error } = usePayments();

    return (
        <Layout title='Home' home={false} back={false} >
            <HomeProvider
                props={{
                    search,
                    setSearch,
                    isLoading,
                    data,
                    params,
                    updateParams,
                    onClearFilter,
                    refetch,
                    error,
                    onCloseErrorMessage
                }}
            >
                <Filters />
                <PaymentTable />
                <Pagination />
            </HomeProvider>
            <ErrorBox
                snackbarMessage={snackbarMessage}
                onCloseErrorMessage={onCloseErrorMessage}
            />
        </Layout>
    );
};

export default HomePage;
