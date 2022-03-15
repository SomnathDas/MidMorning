import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import ThemeContext from "../components/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const [currentTheme, setCurrentTheme] = useState([
    0,
    "/hero.webp",
    "/heroMobile.webp",
  ]);

  useEffect(() => {
    const themes = [
      [0, "/hero.webp", "/heroMobile.webp"],
      [1, "/hero2.webp", "/hero2Mobile.webp"],
    ];

    const interval = () => {
      setCurrentTheme(themes[getRandomInt(2)]);
    };

    const id = setInterval(() => {
      interval();
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <ThemeContext.Provider value={currentTheme}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
