import { Routes, Route } from "react-router-dom";
import EditLayout from "./components/Layout/EditLayout";
import FormLayout from "./components/Layout/FormLayout";
import AddLand from "./pages/AddLand";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/auth" element={<FormLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route element={<EditLayout/>}>
          <Route path="/add" element={<AddLand/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
