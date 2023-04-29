import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../screens/Home/Home';
import ShopPage from '../screens/Product/Product';
import Cart from '../screens/Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/products/:id',
    element: <ShopPage/>
  },
  {
    path: '/cart',
    element: <Cart/>
  }
]);

export default router;