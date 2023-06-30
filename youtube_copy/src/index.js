import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Watch from './Pages/Watch';
import SearchVideos from './Pages/SearchVideos';
import ErrorPage from './Pages/ErrorPage';
import PopularVideos from './Pages/PopularVideos';
import ChannelInfo from './Pages/ChannelInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PopularVideos />
      },
      {
        path: '/videos',
        element: <PopularVideos />
      },
      {
        path: '/videos/:keyword',
        element: <SearchVideos />
      },
      {
        path: '/watch/:videoId',
        element: <Watch />
      },
      {
        path: '/channels/:channelId',
        element: <ChannelInfo />
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
