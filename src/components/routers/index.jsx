import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../../App";
import Login from "../pages/login";
import Dashboard from "../dashboard/index";
import Products from "../products";
import Tasks from "../pages/tasks";
import Product from "../pages/single-page";
import Update from "../update";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/update/:id" element={<Update />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
