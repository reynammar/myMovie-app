import NavLink from "../atoms/NavLink"

const NavMenu = () => {
    const navItems = [
        {label: "Home", to: "/"},
        {label: "About", to: "/about"},
        {label: "List Movies", to: "/movies"},
    ]
    return (
        <div className="flex gap-6">
            {navItems.map((item) => (
                <NavLink key={item.to} label={item.label} to={item.to} />
            ))}
        </div>
    )
}

export default NavMenu