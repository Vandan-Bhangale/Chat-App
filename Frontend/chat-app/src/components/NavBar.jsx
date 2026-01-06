import { useContext, useState } from "react";
import { AuthContext } from "../Context/authContext.jsx";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";


function NavBar() {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);


  const handleLogout = async () => {
    await logout();
    navigate("/");
  }

  return (
  <>
    <nav className="w-full z-50 ">
      <div className="flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white">
          <img
            src={Logo}
            alt="ChatApp logo"
            className="w-10 h-10 object-contain bg-white rounded"
          />
          <span>Talkie</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-400">
          <a href="/feature" className="hover:text-white transition">
            Features
          </a>
          <a href="/about" className="hover:text-white transition">
            About
          </a>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="hover:text-white transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-white transition">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-400">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-left hover:text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-white">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  </>
);
}

export default NavBar;
