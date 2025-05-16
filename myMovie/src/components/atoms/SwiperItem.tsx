interface SwiperItemProps {
  image: string;
  title: string;
  description: string;
}

const SwiperItem = ({ image, title, description }: SwiperItemProps) => (
  <div className="relative w-full h-[500px]">
    <img
      src={image}
      alt={title}
      className="object-cover w-full h-full"
    />
    <div className="absolute bottom-0 bg-black/50 text-white p-4 w-full">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-sm font-semibold">{description}</p>
    </div>
  </div>
);

export default SwiperItem;
