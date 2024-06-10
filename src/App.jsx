import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default App;
