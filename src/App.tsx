import { Routes, Route } from "react-router-dom";
import EditLayout from "./components/Layout/EditLayout";
import FormLayout from "./components/Layout/FormLayout";
import AddLand from "./pages/AddLand";
import Lands from "./pages/Lands";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RequireAuth from "./components/auth/RequireAuth";
import ManageRoute from "./components/routes/ManageRoute";

const qc = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={qc}>
        <Routes>
          <Route path="/">
            <Route path="/auth" element={<FormLayout />}>
              <Route path="login" index element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route element={<EditLayout />}>
              <Route element={<RequireAuth />}>
                <Route path="/lands" element={<Lands />} />
                <Route path="/add" element={<AddLand />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<ManageRoute />} />
        </Routes>
      </QueryClientProvider>
      <ToastContainer limit={1} />
    </>
  );
}

export default App;
