import React from 'react';
import ReactDOM from 'react-dom/client';
import App_xx from './App_xx.jsx';
import './index.css';

import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App_xx />
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
