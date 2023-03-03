import { VehicleList } from "./components";
import { Navbar } from "./components";
import { VehicleForm } from "./components";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<VehicleList />} />
          <Route path="/cadastrar-veiculo" element={<VehicleForm />} />
          <Route path="/editar-veiculo/:id" element={<VehicleForm />} />
        </Routes>
      </div>
    </div>
  );
};
