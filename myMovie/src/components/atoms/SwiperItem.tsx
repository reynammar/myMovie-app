import { motion } from "framer-motion";

interface SwiperItemProps {
  image: string;
  title: string;
  description: string;
}

const SwiperItem = ({ image, title, description }: SwiperItemProps) => {
  return (
    <motion.div
      className="relative w-full h-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img src={image} alt={title} className="object-cover w-full h-full rounded-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
        <h2 className="text-white text-4xl font-bold mb-4">{title}</h2>
        <p className="text-white text-lg max-w-2xl">{description}</p>
      </div>
    </motion.div>
  );
};

export default SwiperItem;
