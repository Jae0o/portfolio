import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Videos from './Components/videos/Videos';
import Watch from './Components/Pages/Watch';
import NotFound from './Components/Pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Videos />
      },
      {
        path: '/Videos/:keyword',
        element: <Videos />
      },
      {
        path: '/Watch/:VideoID',
        element: <Watch />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
