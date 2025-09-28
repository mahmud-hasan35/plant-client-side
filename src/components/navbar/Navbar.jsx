import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Moon, Sprout, Sun } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Load theme
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme
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
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-2 py-1 font-semibold transition-colors ${
              isActive
                ? "text-green-600 dark:text-green-400"
                : "text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-300"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-plants"
          className={({ isActive }) =>
            `px-2 py-1 font-semibold transition-colors ${
              isActive
                ? "text-green-600 dark:text-green-400"
                : "text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-300"
            }`
          }
        >
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-plant"
          className={({ isActive }) =>
            `px-2 py-1 font-semibold transition-colors ${
              isActive
                ? "text-green-600 dark:text-green-400"
                : "text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-300"
            }`
          }
        >
          Add Plant
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-plants"
          className={({ isActive }) =>
            `px-2 py-1 font-semibold transition-colors ${
              isActive
                ? "text-green-600 dark:text-green-400"
                : "text-gray-700 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-300"
            }`
          }
        >
          My Plants
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar sticky top-0 z-50 px-3 md:px-6 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-green-950 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {/* Brand */}
     <div className="navbar-start">
  <Link
    to="/"
    className="flex items-center gap-2 text-xl md:text-2xl font-bold text-green-600 dark:text-green-400"
  >
    <Sprout className="w-7 h-7 md:w-8 md:h-8 text-green-600 dark:text-green-400" />
    PlantCare
  </Link>
</div>

      {/* Menu for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">{navItems}</ul>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className={`menu menu-sm dropdown-content mt-3 p-3 shadow rounded-box w-40 ${
            darkMode ? "bg-green-950 text-gray-100" : "bg-white text-gray-800"
          }`}
        >
          {navItems}
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end flex items-center gap-3">
        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-green-800 transition"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Profile / Auth */}
        {user ? (
          <div
            className="relative"
            onClick={() => isMobile && setShowDropdown(!showDropdown)}
            onMouseEnter={() => !isMobile && setShowDropdown(true)}
            onMouseLeave={() => !isMobile && setShowDropdown(false)}
          >
            <div className="avatar cursor-pointer">
              <div className="w-9 md:w-10 rounded-full ring ring-green-600 ring-offset-base-100 ring-offset-2">
                <img
                  src={user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
                  alt="avatar"
                />
              </div>
            </div>

            {/* Dropdown */}
            <div
              className={`absolute right-4 top-12 shadow-lg rounded-box p-2 w-40 z-50 transition-all duration-200 ${
                darkMode ? "bg-green-950 text-gray-100" : "bg-white text-gray-800"
              } ${showDropdown ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
            >
              <p className="text-sm font-medium text-center">
                {user.displayName || user.email}
              </p>
              <p
                onClick={handleLogOut}
                className="mt-2 text-center text-red-500 font-medium cursor-pointer hover:underline"
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <div className="flex gap-3 text-sm md:text-base font-semibold">
            <Link
              to="/login"
              className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
