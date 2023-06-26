import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  )
}
