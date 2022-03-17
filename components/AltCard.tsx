import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardProps from "../typings/AltCardProps";

const Card = ({ setCardIndex, cardIndex, currCardIndex }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(currCardIndex === cardIndex);
  }, [cardIndex, currCardIndex]);

  return (
    <AnimatePresence>
      <motion.article
        className={`flex justify-center w-full h-full`}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ scaleX: 2 }}
        key={1}
      >
        <div
          className={`${
            isOpen ? "lg:w-2/3" : "w-60"
          } flex justify-center transition-all duration-300 items-center `}
        >
          <div
            className={` relative ${
              isOpen ? "lg:w-full h-3/4" : "w-60 h-96"
            } w-60 h-96 transition-all duration-300 bg-black bg-opacity-0 ${
              isOpen ? "" : "hover:bg-opacity-30"
            } cursor-pointer rounded`}
            onClick={() => {
              currCardIndex === cardIndex
                ? setCardIndex(-1)
                : setCardIndex(cardIndex);
              setIsOpen(currCardIndex === cardIndex);
            }}
          >
            <Image
              src={`/hero2.webp`}
              layout="fill"
              objectFit="cover"
              alt="Thumbnail"
              className="rounded -z-30"
            />
          </div>
        </div>
        <h1>Hello World</h1>
      </motion.article>
    </AnimatePresence>
  );
};

export default Card;
