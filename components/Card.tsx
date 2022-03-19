import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CardProps from "../typings/CardProps";

const Card = ({
  backgroundStyle,
  title,
  description,
  imageLink,
  projectLink,
  index,
  theme,
}: CardProps) => {
  const [direction, setDirection] = useState(false);
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

  const variants = {};

  return (
    <motion.article
      variants={variants}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      key={Math.floor(Math.random() * index) + index}
      className={`${backgroundStyle.div} hover:bg-opacity-40 p-6 flex flex-col gap-12 rounded-sm h-full justify-between `}
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
export default Card;
