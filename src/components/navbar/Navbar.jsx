import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Moon, Sun } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Load from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply data-theme on <html> dynamically
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((error) => console.error(error));
  };

  const navItems = (
    <>
      <li><NavLink to="/" className="font-semibold">Home</NavLink></li>
      <li><NavLink to="/all-plants" className="font-semibold">All Plants</NavLink></li>
      <li><NavLink to="/add-plant" className="font-semibold">Add Plant</NavLink></li>
      <li><NavLink to="/my-plants" className="font-semibold">My Plants</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4">
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-green-600">🌱 PlantCare</Link>
      </div>

      {/* Menu for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
      </div>

      {/* Menu for small screens */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        {/* Dark mode toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="btn btn-sm btn-outline">
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {user ? (
          <div
            className="relative"
            onClick={() => isMobile && setShowDropdown(!showDropdown)}
            onMouseEnter={() => !isMobile && setShowDropdown(true)}
            onMouseLeave={() => !isMobile && setShowDropdown(false)}
          >
            <div className="avatar cursor-pointer">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"} alt="avatar" />
              </div>
            </div>

            <div
              className={`absolute right-4 top-12 bg-base-100 shadow-lg rounded-box p-2 w-40 z-50 transition-all duration-200 ${
                showDropdown ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
              }`}
            >
              <p className="text-sm font-medium text-center">{user.displayName || user.email}</p>
              <button
                onClick={handleLogOut}
                className="btn btn-sm mt-2 text-red-500 w-full"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="space-x-1 md:space-x-2">
            <Link to="/login" className="btn btn-sm btn-outline">Login</Link>
            <Link to="/register" className="btn btn-sm btn-outline">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
