import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperItem from "../atoms/SwiperItem";

const dummyMovies = [
  {
    id: 1,
    image: "https://via.placeholder.com/1200x500",
    title: "News Headline One",
    description: "This is the first news headline description.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/1200x500",
    title: "News Headline Two",
    description: "This is the second news headline description.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/1200x500",
    title: "News Headline Three",
    description: "This is the third news headline description.",
  },
];

const MovieSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="rounded-lg overflow-hidden"
    >
      {dummyMovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <SwiperItem
            image={movie.image}
            title={movie.title}
            description={movie.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSwiper;
