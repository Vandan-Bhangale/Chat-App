import Logo from "../assets/Logo.png";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="w-full z-50">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <img
              src={Logo}
              alt="ChatApp logo"
              className="w-10 h-10 object-contain bg-white-500 text-2xl"
            />
            <span>Talkie</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="/login" className="hover:text-white transition-colors">
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
