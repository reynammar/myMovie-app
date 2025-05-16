import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useMovies } from "../../hooks/useMovies";
import SwiperItem from "../atoms/SwiperItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieSwiper = () => {
  const { movies, loading, error } = useMovies();
  const swiperRef = useRef<any>(null);

  if (loading)
    return <p className="text-center text-gray-500">Loading movies...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="relative w-full">
      <div>
        <h2 className="text-3xl font-bold mb-6">Trending Movies of the Week</h2>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            clickable: true,
            el: ".pagination-outside",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full rounded-lg overflow-hidden"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <SwiperItem
                image={movie.moviePoster}
                title={movie.title}
                description={movie.releaseDate.slice(0, 4)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/70 p-3 rounded-full hover:bg-black/50 transition cursor-pointer"
      >
        <ChevronLeft size={32} strokeWidth={3.5} className="stroke-red-500" />
      </button>

      <button
        onClick={() => swiperRef.current.slideNext()}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/70 p-3 rounded-full hover:bg-black/70 transition cursor-pointer"
      >
        <ChevronRight size={32} strokeWidth={3.5} className="stroke-red-500" />
      </button>

      <div className="pagination-outside flex justify-center mt-6"></div>
    </div>
  );
};

export default MovieSwiper;