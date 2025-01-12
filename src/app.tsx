import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary, PageLoading } from './components';

const HomePage = React.lazy(() => import("./pages/home-page"))
const PaymentDetailsPage = React.lazy(() => import("./pages/payment-details-page"))
const NotFound = React.lazy(() => import("./pages/not-found"))

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/payments/:id" element={<PaymentDetailsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>

  );
};

export default App;