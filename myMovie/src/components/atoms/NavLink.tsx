import { Link } from "react-router";

interface NavLinkProps {
  label: string;
  to: string;
}

const NavLink = ({ label, to }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="text-black font-semibold text-base hover:text-gray-500 transition-colors duration-300 tracking-wide"
    >
      {label}
    </Link>
  );
};

export default NavLink;
