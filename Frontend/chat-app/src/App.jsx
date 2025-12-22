import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";


function App() {
  return (
    <>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
