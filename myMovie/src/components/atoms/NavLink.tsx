interface NavLinkProps {
  label: string;
  targetId: string;
}

const NavLink = ({ label, targetId }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="
        cursor-pointer 
        text-black 
        font-semibold 
        border-t-4 border-transparent
        hover:border-indigo-600 
        transition
        pt-2
      "
    >
      {label}
    </a>
  );
};

export default NavLink;
