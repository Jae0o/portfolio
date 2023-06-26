import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function App() {
  const queryClient = new QueryClient();

  const { keyword } = useParams();

  console.log(keyword);

  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  )
}
