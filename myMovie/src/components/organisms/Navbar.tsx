import { useState, useEffect } from "react";
import Button from "../atoms/Button";
import NavMenu from "../molecules/NavMenu";
import logo from "../../assets/logoMovies.svg";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    const el = document.getElementById("home");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`
        flex justify-between items-center px-14 py-3 w-full shadow-md shadow-black
        transition-all duration-300
        ${isScrolled ? "fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-sm z-50" : "relative bg-white bg-opacity-100"}
      `}
    >
      <button onClick={scrollToHome} className="focus:outline-none cursor-pointer">
        <img src={logo} alt="ReynMovies" className="w-28" />
      </button>

      <div className="hidden md:flex">
        <NavMenu />
      </div>

      <div className="hidden md:flex">
        <Button
          onClick={() => {}}
          type="button"
          className="mr-4 bg-[#0d0907] text-red-500 transition ring-0 hover:ring-2 hover:ring-red-500 rounded"
        >
          <a href="/login" className="no-underline">
            Let'S Go
          </a>
        </Button>
      </div>

      <div className="md:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="mr-4"
        >
          <Menu />
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center py-4 md:hidden">
          <NavMenu />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
