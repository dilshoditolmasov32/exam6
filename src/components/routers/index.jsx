import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../../App";
import Login from "../login";
import Dashboard from "../dashboard/index";
import Products from "../products";
import Tasks from "../tasks";
import Update from "../update";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<Products />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="update/:id" element={<Update />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
