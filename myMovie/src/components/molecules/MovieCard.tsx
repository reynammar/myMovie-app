import PosterImage from "../atoms/PosterImage";
import RatingBadge from "../atoms/RatingBadge";

interface MovieCardProps {
  poster: string;
  title: string;
  date: string;
  rating: number;
  genres: string[];
}

const MovieCard = ({ poster, title, date, rating, genres }: MovieCardProps) => {
  return (
    <div className="relative rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 cursor-pointer border-2">
      <PosterImage src={poster} alt={title} />
      <RatingBadge rating={rating} />
      <div className="p-4">
        <h3 className="font-semibold text-xl text-black">{title}</h3>
        <p className="text-gray-600">{date}</p>
        <p className="text-gray-500 text-sm mt-1">{genres.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
