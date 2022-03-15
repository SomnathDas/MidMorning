import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";
import BackgroundDiv from "../components/BackgroundDiv";
import Layout from "../components/Layout";
import ThemeContext from "../components/ThemeContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  const theme = useContext(ThemeContext);

  return (
    <div className={`w-screen h-screen`}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Tears in rain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <BackgroundDiv currentTheme={theme} />
        <main
          className={`h-full flex flex-col lg:items-baseline items-center justify-center `}
        >
          <AnimatePresence>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              exit={{ opacity: 0 }}
              className={`flex flex-col relative lg:items-start md:items-center  z-10 gap-4 md:top-6 lg:top-20 lg:ml-auto lg:mr-auto lg:w-64 top-24`}
            >
              <h2 className={`lg:hidden md:hidden text-5xl`}>
                <span>
                  U
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, delay: 2, repeat: Infinity }}
                    className={` inline-block ml-1`}
                  >
                    X
                  </motion.div>
                  <br></br>D
                </span>
                <span className={` text-xl`}>esigner</span>
              </h2>
              <h1
                className={`lg:text-6xl md:text-center lg:w-auto md:w-96 w-56 lg:text-left md:text-5xl text-4xl lg:leading-tight`}
              >
                Hi there, <br></br>I am{" "}
                <span className={`md:text-black text-white`}>
                  {" "}
                  Somn
                  <span className={`lg:text-white`}>ath Das</span>
                </span>
              </h1>
              <div className={`lg:w-80 md:w-56`}>
                <p
                  className={`lg:block lg:text-right md:block md:text-center hidden lg:text-xl text-right lg:mr-2 `}
                >
                  Passionate about designing <strong>clean</strong> and{" "}
                  <strong>
                    aesthetically{" "}
                    <span className={`lg:text-black md:text-white`}>
                      pleasing
                    </span>
                  </strong>{" "}
                  <span className={`lg:text-black md:text-white`}>
                    products.
                  </span>
                </p>
              </div>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, filter: "hue-rotate(0deg)" }}
              animate={{ opacity: 1, filter: "hue-rotate(360deg)" }}
              transition={{ duration: 2, delay: 0.2 }}
              className={` lg:self-center relative lg:bottom-20 lg:left-12 object-center hidden md:block`}
            >
              <Image
                src={`${theme[1]}`}
                height={320}
                width={480}
                alt="Flower"
                placeholder="blur"
                blurDataURL={rgbDataURL(132, 202, 231)}
                priority={true}
              />
              <div className="hidden">
                <Image
                  src={`/hero2.webp`}
                  height={320}
                  width={480}
                  alt="Flower"
                  placeholder="blur"
                  blurDataURL={rgbDataURL(132, 202, 231)}
                  priority={true}
                />
              </div>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, filter: "hue-rotate(0deg)" }}
              animate={{ opacity: 1, filter: "hue-rotate(360deg)" }}
              transition={{ duration: 2, delay: 0.2 }}
              className={`md:hidden mb-12`}
            >
              <Image
                src={`${theme[2]}`}
                height={380}
                width={240}
                alt="Flower"
                placeholder="blur"
                blurDataURL={rgbDataURL(132, 202, 231)}
                priority={true}
              />
              <div className="hidden">
                <Image
                  src={`/hero2Mobile.webp`}
                  height={380}
                  width={240}
                  alt="Flower"
                  placeholder="blur"
                  blurDataURL={rgbDataURL(132, 202, 231)}
                  priority={true}
                />
              </div>
            </motion.section>
          </AnimatePresence>
        </main>
      </Layout>
    </div>
  );
};

export default Home;

/*<section className={`w-1/2`}>
        <Image
          src="/hero.webp"
          height={435}
          width={720}
          layout="responsive"
          alt="Flower"
        />
      </section> */
