import MovieCard from "../molecules/MovieCard";
import type { Movie } from "../../services/movieServices";

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid = ({ movies }: MovieGridProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          poster={movie.moviePoster}
          title={movie.title}
          date={formatDate(movie.releaseDate)}
          rating={movie.rating / 10} // rating API 0-100, ubah ke 0-10
          genres={movie.genre.split(",").map((g) => g.trim())}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
