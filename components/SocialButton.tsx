import styles from "../styles/Social.module.css";
import SocialButtonProps from "../typings/SocialButtonProps";

const SocialButton = ({
  bgColor,
  logo,
  title,
  accountLink,
}: SocialButtonProps) => {
  return (
    <a
      className={`h-14 w-14 rounded-full hover:rounded-l-full ${
        styles.parentOfText
      } ${
        bgColor === "behance"
          ? "bg-colorBehance"
          : bgColor === "twitter"
          ? "bg-colorTwitter"
          : bgColor === "github"
          ? "bg-colorGithub"
          : bgColor === "insta"
          ? "bg-colorInsta"
          : "bg-white"
      } ${
        bgColor === "white" ? "border-2 border-black" : ""
      } flex hover:w-44 transition-all justify-center items-center md:border-none cursor-pointer`}
      href={accountLink}
      target="_blank"
      rel="noreferrer"
    >
      <div className={`h-14 w-auto flex items-center ${styles.logo}`}>
        {logo}
      </div>
      <p
        className={`${styles.childText} fadeInAlt text-xl ${
          bgColor === "white" ? "text-black" : "text-white"
        }`}
      >
        {title}
      </p>
    </a>
  );
};

export default SocialButton;
