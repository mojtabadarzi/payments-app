import { usePaymentDetails } from '../hooks';
import { ErrorBox } from '../components/common/error-box';
import { InfoRow } from '../components/payment-datails/info-row';
import { CopyToClipboard, Layout, NotAssign, Status, TypeBadge } from '../components';
import { convertToLongDate } from '../utils';

const PaymentDetailsPage = () => {
    const { data, isLoading, snackbarMessage, onCloseErrorMessage } = usePaymentDetails();

    // we can use useMemo, but i prefer not!
    const infoList = [
        { label: "Type", value: <TypeBadge type={data?.type} />, isBadge: true },
        { label: "Status", value: <Status status={data?.status} />, isBadge: true },
        { label: "Amount", value: data?.value ? `${"$" + data?.value?.toLocaleString()}` : <NotAssign /> },
        { label: "Paid at", value: data?.paid_at ? convertToLongDate(data?.paid_at) : <NotAssign /> },
        { label: "Description", value: data?.description ? data?.description : <NotAssign />, border: false },
    ]
    return (
        <Layout title="Payment Details" back home>
            <div className="bg-white shadow rounded-3xl p-6 pb-2 flex flex-col items-center gap-4 mt-2">
                <div className="bg-gray-100 h-20 w-full sm:w-[360px] rounded-3xl flex justify-center items-center overflow-hidden">
                    <span className="flex justify-center items-center text-2xl font-bold w-fit h-full text-gray-500 block py-8 px-4 border-white border-r-2">ID</span>
                    {isLoading ? (
                        <div className="animate-pulse bg-gray-200 h-4 flex-1 mx-8 rounded my-4" />
                    ) : (
                        <div className="text-lg flex justify-between pl-4 items-center font-medium text-gray-800 h-full flex-1 text-center">
                            {data?.id ?? <NotAssign />}
                            <CopyToClipboard text={data?.id} />
                        </div>
                    )}
                </div>
                <div className="flex flex-col justify-start w-full">
                    {infoList?.map((item) => (<InfoRow
                        key={item?.label}
                        label={item?.label}
                        value={item?.value}
                        isBadge={item?.isBadge}
                        border={item?.border}
                        isLoading={isLoading}
                    />))}
                </div>
            </div>
            <ErrorBox snackbarMessage={snackbarMessage} onCloseErrorMessage={onCloseErrorMessage} />
        </Layout>
    );
};

export default PaymentDetailsPage;
