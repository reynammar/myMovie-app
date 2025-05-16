import NavLink from "../atoms/NavLink";

const navMenus = [
  { label: "Home", targetId: "home" },
  { label: "About", targetId: "about" },
  { label: "Movies", targetId: "movies" },
];

const NavMenu = () => {
  return (
    <div className="flex space-x-6">
      {navMenus.map((menu) => (
        <NavLink key={menu.targetId} label={menu.label} targetId={menu.targetId} />
      ))}
    </div>
  );
};

export default NavMenu;
