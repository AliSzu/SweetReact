import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../screens/MainPage/MainPage';
import ShopPage from '../screens/ShopPage/ShopPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/products/:id',
    element: <ShopPage/>
  }
]);

export default router;