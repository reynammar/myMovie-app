export interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  genre: string;
  rating: number;
  moviePoster: string;
  descriptionMovie: string;
}

export const fetchMovies = async (): Promise<Movie[]> => {
  const res = await fetch("https://68234f2465ba0580339634f1.mockapi.io/films");
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
};
