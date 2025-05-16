import { useMovies } from "../hooks/useMovies";
import MovieGrid from "../components/organisms/MovieGrid";

const Movies = () => {
  const { movies, loading, error } = useMovies();
  if (loading) return <p className="text-center">Loading movies...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Featured Movies</h2>
      <MovieGrid movies={movies} />
    </section>
  );
};

export default Movies;
