import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { BsSun, BsMoon, } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for dark mode preference
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      setDarkMode(true);
    }
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];


  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center h-16 lg:mr-5">
          <div className="flex space-x-2 lg:">
            <h1
              className={`font-bold text-xl p-3 cursor-pointer${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Sourav Khasnobish
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div className="flex items-center space-x-4 ">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className={`hover:scale-105 duration-200 cursor-pointer ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className={`${
                darkMode ? "text-gray-100" : "text-gray-900"
              } focus:outline-none`}
            >
              {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
            </button>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? (
                <IoCloseSharp
                  size={24}
                  color={darkMode ? "bg-white" : "bg-black"}
                />
              ) : (
                <AiOutlineMenu
                  size={24}
                  color={darkMode ? "bg-white" : "bg-black"}
                />
              )}
            </div>
          </div>
        </div>
        {/* mobile Navbar */}
        {menu && (
          <div
            className={`${
              darkMode
                ? "text-gray-100 bg-gray-800"
                : "text-gray-900 bg-gray-300"
            }`}
          >
            <ul
              className={`md:hidden flex flex-col h-screen items-center justify-center text-xl  ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold mb-2 "
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
