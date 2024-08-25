import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SigninPage from "./pages/Signin";
import SignupPage from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/sign-up" element={<SignupPage />}></Route>
      <Route path="/sign-in" element={<SigninPage />}></Route>
    </Routes>
  );
}

export default App;
