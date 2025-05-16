import { useState, useEffect } from "react";
import { fetchMovies } from "../services/movieServices";
import type { Movie } from "../services/movieServices";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getMovies = async () => {
    try {
      const data = await fetchMovies();
      setMovies(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { movies, loading, error };
};
