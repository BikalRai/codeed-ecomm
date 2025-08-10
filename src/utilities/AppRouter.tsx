import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import SmartPhones from "../pages/SmartPhones";
import AddSmartPhone from "../pages/AddSmartPhone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/smartphones",
    element: <SmartPhones />,
  },
  {
    path: "/addPhone",
    element: <AddSmartPhone />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
