import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./Pages/LandingPage";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Signup />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
