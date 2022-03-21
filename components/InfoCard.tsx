import { motion } from "framer-motion";
import { useState } from "react";
import InfoCardProps from "../typings/InfoCardProps";

const InfoCard = ({ index, setActiveCard, currCard, info }: InfoCardProps) => {
  const [direction, setDirection] = useState(false);
  const variants = {
    leftSwipeInitial: { opacity: 0, x: 500 },
    rightSwipeInitial: { opacity: 0, x: -500 },
    leftSwipeExit: { opacity: 0, x: -500 },
    rightSwipeExit: { opacity: 0, x: 500 },
  };

  return (
    <motion.article
      variants={variants}
      transition={{ duration: 0.5 }}
      initial={direction ? "leftSwipeInitial" : "rightSwipeInitial"}
      animate={{ opacity: 1, x: 0 }}
      exit={direction ? "leftSwipeExit" : "rightSwipeExit"}
      drag="x"
      whileTap={{ scale: 0.9 }}
      dragConstraints={{ left: 0, right: 0 }}
      dragSnapToOrigin={true}
      onDragEnd={(event, info) => {
        console.log(info);
        if (info.offset.x >= 120) {
          setDirection(false);
          setActiveCard(currCard + 1);
        } else if (info.offset.x <= -120) {
          setDirection(true);
          setActiveCard(currCard - 1);
        }
      }}
      key={index}
      className={` hover:bg-opacity-40  flex flex-col gap-12 rounded-sm h-full justify-center border-2 border-black`}
    >
      <p className={` text-base text-center `}>{info}</p>
    </motion.article>
  );
};

export default InfoCard;
