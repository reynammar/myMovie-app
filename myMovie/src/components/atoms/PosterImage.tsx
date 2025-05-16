interface PosterImageProps {
  src: string;
  alt: string;
}

const PosterImage = ({ src, alt }: PosterImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-64 object-fill rounded-t-lg transition-opacity duration-300 hover:opacity-70"
      loading="lazy"
    />
  );
};

export default PosterImage;
