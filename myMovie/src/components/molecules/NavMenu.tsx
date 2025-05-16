import NavLink from "../atoms/NavLink";
import { Home, Film, Star } from "lucide-react";  // import icon lucide

const navMenus = [
  { label: "Home", targetId: "home", icon: Home },
  { label: "Movies", targetId: "movies", icon: Film },
  { label: "Favorite", targetId: "favorite", icon: Star },
];

const NavMenu = () => {
  return (
    <div className="flex space-x-10">
      {navMenus.map((menu) => (
        <NavLink
          key={menu.targetId}
          label={menu.label}
          targetId={menu.targetId}
          icon={menu.icon}
        />
      ))}
    </div>
  );
};

export default NavMenu;
