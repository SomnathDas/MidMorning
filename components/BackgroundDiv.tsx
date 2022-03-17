import { motion } from "framer-motion";

const BackgroundDiv = ({ currentTheme }: any) => {
  return (
    <>
      <motion.div
        animate={{ rotateX: 360 }}
        transition={{ duration: 1 }}
        className={`absolute h-2/3 w-full ${
          currentTheme[0] === 0 ? "bg-morningblue" : "bg-morningyellow"
        } transition-colors duration-700 ease-in-out fadeIn -z-50`}
      ></motion.div>
    </>
  );
};

export default BackgroundDiv;
