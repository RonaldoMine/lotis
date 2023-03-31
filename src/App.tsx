import {Routes, Route} from "react-router-dom";
import EditLayout from "./components/layout/EditLayout";
import LayoutAuth from "./components/layout/LayoutAuth";
import LayoutGuest from "./components/layout/LayoutGuest";
import AddLand from "./pages/AddLand";
import Lands from "./pages/Lands";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Routes>
            <Route path="auth" element={<LayoutGuest/>}>
                <Route path="sign-in" element={<SignIn/>}/>
                <Route path="sign-up" element={<SignUp/>}/>
            </Route>
            <Route path="admin" element={<LayoutAuth/>}>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="lands" element={<Lands/>}/>
                <Route path="lands/add" element={<AddLand/>}/>
            </Route>
        </Routes>
    );
}

export default App;
