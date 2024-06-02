import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';

import GlobalStyles from './styles/GlobalStyles';

import {
  Account_31,
  Bookings_31,
  Cabins_31,
  Dashboard_31,
  Login_31,
  PageNotFound_31,
  Settings_31,
  NewUsers_31,
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard_31 />,
      },
      {
        path: 'dashboard',
        element: <Dashboard_31 />,
      },
      {
        path: 'bookings',
        element: <Bookings_31 />,
      },
      {
        path: 'bookings/:bookingId',
        element: <Bookings_31 />,
      },
      {
        path: 'cabins',
        element: <Cabins_31 />,
      },
      {
        path: 'users',
        element: <NewUsers_31 />,
      },
      {
        path: 'settings',
        element: <Settings_31 />,
      },
      {
        path: 'account',
        element: <Account_31 />,
      },
    ],
  },
]);

const App_31 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          styles: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-70)',
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_31;
