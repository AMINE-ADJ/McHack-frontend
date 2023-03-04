import { Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./Components/Booking";
import Finish from "./Components/Finish";
import Logout from "./Pages/Logout";
import Progress from "./Components/Progress";
import Dashboard from "./Pages/Dashboard";
import Acceuil from "./Pages/Acceuil";
import LoginPage from "./Pages/LoginPage";
import Setting from "./Pages/Setting";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/acceuil" element={<Acceuil />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="booking" element={<Booking />} />
            <Route path="progress" element={<Progress />} />
            <Route path="finish" element={<Finish />} />
          </Route>
          <Route path="setting" element={<Setting />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
      {/* <Booking /> */}
    </div>
  );
}

export default App;
