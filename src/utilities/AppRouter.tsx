import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import SmartPhones from '../pages/SmartPhones';
import AddSmartPhone from '../pages/AddSmartPhone';
import Cart from '../pages/Cart';
import ProductPage from '../pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/smartphones',
    element: <SmartPhones />,
  },
  {
    path: '/addPhone',
    element: <AddSmartPhone />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/product/1',
    element: <ProductPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
