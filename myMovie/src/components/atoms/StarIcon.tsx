import { Star } from "lucide-react";

const StarIcon = ({ size = 16, className = "" }) => {
  return <Star size={size} strokeWidth={2} className={className} />;
};

export default StarIcon;
