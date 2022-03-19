import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import BackgroundDiv from "../components/BackgroundDiv";
import InfoCard from "../components/InfoCard";
import Layout from "../components/Layout";
import SocialButton from "../components/SocialButton";
import ThemeContext from "../components/ThemeContext";

const About: NextPage = () => {
  const theme = useContext(ThemeContext);
  const [activeCard, setActiveCard] = useState(0);
  let elem;
  const dragToChange = (activeCard: number) => {
    activeCard >= 0 && activeCard <= 1 ? setActiveCard(activeCard) : 0;
  };
  switch (activeCard) {
    case 0:
      elem = (
        <InfoCard
          key={0}
          index={1}
          setActiveCard={(value: number) => dragToChange(value)}
          currCard={activeCard}
          info={`Experienced in working with React.js and Next.js. Currently learning about web designing.\n\n I am also passionate about mathematics and I always try to develop my problem solving skills. I usually listen to music while working around in my head during my leisure time.`}
        />
      );
      break;
    case 1:
      elem = (
        <InfoCard
          key={1}
          index={2}
          setActiveCard={(value: number) => dragToChange(value)}
          currCard={activeCard}
          info={`I am ready for learning
                new things and having a hands-on experience on real world
                projects. \n\n I am also experienced with frameworks such as Tailwind
                CSS and Bootstrap. I am also familiar with Vue.js. My primary
                programming language consist of Javascript/Typescript.`}
        />
      );
      break;
    default:
      break;
  }

  const figmaLogo = (
    <svg
      height="2500"
      viewBox="0 0 200 300"
      width="1667"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "30px", width: "30px" }}
    >
      <path
        d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
        fill="#0acf83"
      />
      <path
        d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
        fill="#a259ff"
      />
      <path
        d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
        fill="#f24e1e"
      />
      <path
        d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z"
        fill="#ff7262"
      />
      <path
        d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
        fill="#1abcfe"
      />
    </svg>
  );

  const twitterLogo = (
    <svg
      width="2500"
      height="1684"
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      style={{ height: "35px", width: "35px", fill: "white" }}
      viewBox="-89.009 -46.884 643.94 446.88"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m154.73 400c185.67 0 287.2-153.88 287.2-287.31 0-4.37-0.089-8.72-0.286-13.052a205.3 205.3 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1-64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.95 45.222-100.95 100.96 0 7.925 0.887 15.631 2.619 23.025-83.895-4.223-158.29-44.405-208.07-105.5a100.74 100.74 0 0 0-13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.17 100.17 0 0 1-45.716-12.63c-0.015 0.424-0.015 0.837-0.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.04 101.04 0 0 1-26.617 3.553c-6.493 0-12.821-0.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.37 43.224a204.9 204.9 0 0 1-24.078-1.399c44.674 28.645 97.72 45.359 154.73 45.359"
        fill="#ffffff"
        fillRule="nonzero"
      />
    </svg>
  );
  const behanceLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="1583"
      viewBox="0.5 94.187 511 323.626"
      style={{ height: "30px", width: "30px", fill: "white" }}
    >
      <path d="M206.729 238.87s48.358-3.59 48.358-60.297c0-56.711-39.563-84.387-89.678-84.387H.5v316.909h164.909s100.671 3.18 100.671-93.537c0 .001 4.389-78.688-59.351-78.688zm-53.19-88.357h11.87s22.416 0 22.416 32.973c0 32.969-13.183 37.749-28.136 37.749H73.161v-70.722h80.378zm7.21 204.257H73.161v-84.69h92.248s33.41-.438 33.41 43.522c0 37.068-24.954 40.888-38.07 41.168zm239.593-179.953c-121.873 0-121.765 121.766-121.765 121.766s-8.362 121.141 121.765 121.141c0 0 108.438 6.195 108.438-84.271h-55.768s1.86 34.068-50.81 34.068c0 0-55.777 3.738-55.777-55.135H510.64c0-.001 17.968-137.569-110.298-137.569zm-54.53 95.263s6.81-48.846 55.769-48.846c48.949 0 48.336 48.846 48.336 48.846H345.812zm117.096-118.199H332.159v-39.025h130.749v39.025z" />
    </svg>
  );
  const instaLogo = (
    <svg
      width="2500"
      height="2500"
      viewBox="0 0 2499.9 2500"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "30px", width: "30px" }}
    >
      <defs>
        <radialGradient
          id="d"
          cx="332.14"
          cy="2511.8"
          r="3263.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fa8f21" offset=".09" />
          <stop stopColor="#d82d7e" offset=".78" />
        </radialGradient>
        <radialGradient
          id="c"
          cx="1516.1"
          cy="2623.8"
          r="2572.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8c3aaa" stopOpacity="0" offset=".64" />
          <stop stopColor="#8c3aaa" offset="1" />
        </radialGradient>
      </defs>
      <path
        d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
        fill="url(#d)"
      />
      <path
        d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
        fill="url(#c)"
      />
    </svg>
  );
  const githubLogo = (
    <svg
      width="2500"
      height="2432"
      viewBox="0 0 256 249"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      style={{ height: "30px", width: "30px" }}
    >
      <g fill="#ffffff">
        <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
        <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
      </g>
    </svg>
  );

  return (
    <div className={`w-screen h-screen`}>
      <Head>
        <title>About</title>
        <meta name="description" content="Tannhäuser Gate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundDiv currentTheme={theme} />
      <Layout>
        <main
          className={`h-full w-full flex justify-center items-center p-12 flex-col md:flex-row gap-8`}
        >
          <motion.section
            initial={{ opacity: 0, filter: "hue-rotate(0deg)" }}
            animate={{ opacity: 1, filter: "hue-rotate(360deg)" }}
            transition={{ duration: 2, delay: 0.2 }}
            key={12}
            className={` lg:self-center relative lg:bottom-20 lg:left-12 object-center hidden md:block -z-30`}
          >
            <div className={`w-96 h-96 bg-white border-black border-2`}></div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, filter: "hue-rotate(0deg)" }}
            animate={{ opacity: 1, filter: "hue-rotate(360deg)" }}
            transition={{ duration: 2, delay: 0.2 }}
            className={`md:hidden mt-12`}
          >
            <div
              className={`w-44 h-44 rounded-full bg-white border-black border-2`}
            ></div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={`relative w-full h-full text-black text-4xl md:text-5xl md:hidden overflow-x-hidden m-4`}
          >
            <AnimatePresence exitBeforeEnter={true}>{elem}</AnimatePresence>
          </motion.section>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={`flex flex-col gap-4`}
          >
            <motion.div
              className={`flex gap-4 self-center`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <SocialButton
                bgColor="github"
                logo={githubLogo}
                title="Github"
                accountLink={"https://github.com/SomnathDas/"}
              />
              <SocialButton
                bgColor="white"
                logo={figmaLogo}
                title={"Figma"}
                accountLink={"https://www.figma.com/@somnathdas"}
              />
              <SocialButton
                bgColor="twitter"
                logo={twitterLogo}
                title="Twitter"
                accountLink={"https://twitter.com/aksd3247"}
              />
              <SocialButton
                bgColor="white"
                logo={instaLogo}
                title="Instagram"
                accountLink={"https://www.instagram.com/samurai3247"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={` w-11/12 lg:w-11/12 md:w-full border-2 border-black p-2 flex-col justify-center items-center hidden md:flex`}
            >
              <h1 className={`text-3xl`}>My name is Somnath and I exists.</h1>
              <p className={`text-right  w-4/5`}>
                Experienced in working with React.js and Next.js. Currently
                learning about web designing. I am also passionate about
                mathematics and I always try to develop my problem solving
                skills. I usually listen to music while working around in my
                head during my leisure time.
              </p>
            </motion.div>
            <div
              className={` w-4/5 lg:w-4/5 md:w-full border-2 border-black p-2 flex-col justify-center items-center relative lg:right-40 bg-white bg-opacity-70 hidden md:flex`}
            >
              <p className={`text-left`}>
                <strong className="text-4xl">I</strong> am ready for learning
                new things and having a hands-on experience on real world
                projects. I am also experienced with frameworks such as Tailwind
                CSS and Bootstrap. I am also familiar with Vue.js. My primary
                programming language consist of Javascript/Typescript. But I
                have also worked with langauges such as Java, C++ and Dart.
              </p>
            </div>
          </motion.section>
        </main>
      </Layout>
    </div>
  );
};

export default About;
