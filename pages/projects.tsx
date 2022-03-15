import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { SetStateAction, useContext, useEffect, useState } from "react";
import BackgroundDiv from "../components/BackgroundDiv";
import Card from "../components/Card";
import Layout from "../components/Layout";
import ThemeContext from "../components/ThemeContext";

const Projects: NextPage = () => {
  const theme = useContext(ThemeContext);

  const [activeCard, setActiveCard] = useState(-1);

  return (
    <div className={`w-screen h-screen`}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Tears in rain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <BackgroundDiv currentTheme={theme} />
        <main className="h-full w-full flex flex-col lg:items-baseline items-center justify-center">
          <motion.section
            className={`relative w-full h-full flex lg:flex-row lg:items-center lg:justify-center flex-col justify-center overflow-y-hidden`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Card
              setCardIndex={(index: number) => setActiveCard(index)}
              cardIndex={0}
              currCardIndex={activeCard}
            />
          </motion.section>
        </main>
      </Layout>
    </div>
  );
};

export default Projects;
