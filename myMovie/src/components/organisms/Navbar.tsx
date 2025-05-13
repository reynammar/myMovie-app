import { useState } from "react";
import Button from "../atoms/Button";
import NavMenu from "../molecules/NavMenu";
import { Link } from "react-router";
import logo from "../../assets/logoMovies.svg";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between bg-white items-center px-14 py-3 w-full shadow-md shadow-black">
      <Link to="/">
        <img src={logo} alt="ReynMovies" className="w-28" />
      </Link>

      <div className="hidden md:flex">
        <NavMenu />
      </div>

      <div className="hidden md:flex">
        <Button onClick={() => {}} type="button" className="mr-4">
          <Link to="/login">Let'S Go</Link>
        </Button>
      </div>

      <div className="md:hidden">
        <Button onClick={() => setIsOpen(!isOpen)} type="button" className="mr-4">
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
