import type { LucideIcon } from "lucide-react";

interface NavLinkProps {
  label: string;
  targetId: string;
  icon?: LucideIcon
}

const NavLink = ({ label, targetId, icon: Icon }: NavLinkProps) => {
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
        hover:border-red-600
        transition
        pt-2
        flex items-center space-x-2
      "
    >
      {Icon && <Icon className="text-red-600" size={20} strokeWidth={2} />}
      <span>{label}</span>
    </a>
  );
};

export default NavLink;
