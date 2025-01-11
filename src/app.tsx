import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Hello, React Query with Tailwind!</h1>
      </div>
    </QueryClientProvider>
  );
};

export default App;
