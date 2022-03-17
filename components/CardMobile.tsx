import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CardProps from "../typings/CardMobileProps";

const CardMobile = ({
  backgroundStyle,
  title,
  index,
  setActiveCard,
  currCard,
  theme,
  description,
  imageLink,
  projectLink,
}: CardProps) => {
  const [direction, setDirection] = useState(false);
  const variants = {
    leftSwipeInitial: { opacity: 0, x: 500 },
    rightSwipeInitial: { opacity: 0, x: -500 },
    leftSwipeExit: { opacity: 0, x: -500 },
    rightSwipeExit: { opacity: 0, x: 500 },
  };

  const [currStyle, setStyle] = useState({
    backgroundImage: `url(${imageLink})`,
    backgroundColor: "rgba(9, 129, 209, 0.651)",
    backgroundPosition: "right",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    transition: "all",
  });

  useEffect(() => {
    if (theme[0] === 0) {
      setStyle({
        backgroundImage: `url(${imageLink})`,
        backgroundColor: "rgba(9, 129, 209, 0.69)",
        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        transition: "all",
      });
    } else {
      setStyle({
        backgroundImage: `url(${imageLink})`,
        backgroundColor: "rgba(255, 208, 0, 0.69)",
        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        transition: "all",
      });
    }
  }, [imageLink, theme]);

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
        if (info.offset.x >= 150) {
          setDirection(false);
          setActiveCard(currCard + 1);
        } else if (info.offset.x <= -150) {
          setDirection(true);
          setActiveCard(currCard - 1);
        }
      }}
      key={index}
      className={` hover:bg-opacity-40 p-6 flex flex-col gap-12 rounded-sm h-full justify-center`}
      style={currStyle}
    >
      <motion.h1 className={``}>
        <small>0{index}</small> <br></br> {title}
      </motion.h1>
      <p className={`text-xl`} style={{ whiteSpace: "pre-line" }}>
        {description}
      </p>
      <a
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        className={`bg-white text-black rounded-sm text-center p-2 text-xl`}
      >
        Check it out
      </a>
    </motion.article>
  );
};
export default CardMobile;
