import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
