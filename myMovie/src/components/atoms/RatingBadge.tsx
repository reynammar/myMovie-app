import StarIcon from "./StarIcon";

interface RatingBadgeProps {
  rating: number;
}

const RatingBadge = ({ rating }: RatingBadgeProps) => {
  return (
    <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-yellow-400 px-2 py-1 rounded flex items-center space-x-1">
      <StarIcon />
      <span className="font-semibold text-sm">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingBadge;
