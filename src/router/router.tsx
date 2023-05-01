import React from 'react';
import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import MainPage from '../screens/Home/Home';
import Product from '../screens/Product/Product';
import Cart from '../screens/Cart/Cart';

const router = createHashRouter([
  {
    path: '/*',
    element: <MainPage />,
  },
  {
    path: '/products/:id',
    element: <Product/>
  },
  {
    path: '/cart',
    element: <Cart/>
  }
]);

export default router;