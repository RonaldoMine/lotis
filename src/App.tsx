import {Routes, Route} from "react-router-dom";
import LayoutAuth from "./components/layout/LayoutAuth";
import LayoutGuest from "./components/layout/LayoutGuest";
import AddLand from "./pages/AddLand";
import Lands from "./pages/Lands";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import {QueryClient, QueryClientProvider} from "react-query";
import ManageRoute from "./components/routes/ManageRoute";
import RequireAuth from "./components/auth/RequireAuth";
import {ToastContainer} from "react-toastify";

function App() {
    const qc = new QueryClient();

    return (
        <>
            <QueryClientProvider client={qc}>
                <Routes>
                    <Route path="auth" element={<LayoutGuest/>}>
                        <Route path="sign-in" element={<SignIn/>}/>
                        <Route path="sign-up" element={<SignUp/>}/>
                    </Route>
                    <Route path="admin" element={<LayoutAuth/>}>
                        <Route element={<RequireAuth/>}>
                            <Route path="dashboard" element={<Dashboard/>}/>
                            <Route path="lands" element={<Lands/>}/>
                            <Route path="lands/add" element={<AddLand/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<ManageRoute/>}/>
                </Routes>
            </QueryClientProvider>
            <ToastContainer limit={1} />
        </>
    );
}

export default App;
