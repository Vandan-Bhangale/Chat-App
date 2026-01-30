import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../Context/authContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Avatar from "../assets/avatar.jpg";

function NavBar() {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // desktop dropdown
  const [open, setOpen] = useState(false);
  const desktopRef = useRef(null);

  // mobile hamburger
  const [isOpen, setIsOpen] = useState(false);
  const mobileRef = useRef(null);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  /* Desktop Outside Click  */
  useEffect(() => {
    if (!open) return;

    const handler = (e) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  /* Mobile Outside Click  */
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  return (
    <nav className="w-full z-50">
      <div className="flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <img
            src={Logo}
            alt="Talkie logo"
            className="w-10 h-10 bg-white rounded object-contain"
          />
          <span>Talkie</span>
        </Link>

        {/* Desktop Menu  */}
        <div className="hidden md:flex items-center gap-6 text-gray-400">
          <Link to="/feature" className="hover:text-white">Features</Link>
          <Link to="/about" className="hover:text-white">About</Link>

          {isAuthenticated ? (
            <div className="relative" ref={desktopRef}>
              <img
                src={user?.profilePic}
                alt={user?.name ?? "avatar"}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setOpen(!open)}
              />

              {open && (
                <div className="absolute right-0 mt-3 w-44 bg-amber-50 rounded-lg border shadow z-50">
                  <p className="px-3 py-2 font-semibold text-black">
                    Hello, {user?.name}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 hover:bg-red-500 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="hover:text-white">Login</Link>
          )}
        </div>

        {/* Mobile Hamburger  */}
        <div className="relative md:hidden z-10" ref={mobileRef}>
          <button
            className="text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isAuthenticated ? (
              <img
                src={user?.profilePic}
                alt={user?.name ?? "avatar"}
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            ): (
              <img
                src={Avatar}
                alt={"avatar"}
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            )}
             
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-4 w-64 bg-gray-900 rounded-lg shadow-lg text-gray-400 p-4 flex flex-col gap-4">
              <p className="font-bold text-white">
                Hello, {user?.name ?? "Guest"}
              </p>

              <Link
                to="/feature"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                Features
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                About
              </Link>

              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="text-left hover:text-white"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
