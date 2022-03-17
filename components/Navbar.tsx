import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <nav className={`absolute z-50 w-full mt-12 mb-8`}>
      <NavbarList />
    </nav>
  );
};

const NavbarList = () => {
  const Router = useRouter();
  return (
    <ul
      className={`flex gap-8 lg:gap-8 md:gap-16 tracking-wide text-white lg:text-sm md:text-lg text-sm lg:justify-end lg:mr-16 justify-center`}
    >
      <div
        className={`bg-black w-60 h-full absolute -z-10 opacity-20 rounded-full md:hidden`}
      ></div>
      <li>
        <Link href={`/`}>
          <a
            className={`${
              Router.pathname !== "/" ? "opacity-50" : "opacity-100"
            } ${
              Router.pathname !== "/"
                ? "hover:opacity-90 transition-opacity"
                : ""
            }`}
          >
            HOME
          </a>
        </Link>
      </li>
      <li>
        <Link href={`/about`}>
          <a
            className={`
              ${Router.pathname !== "/about" ? "opacity-70" : "opacity-100"} ${
              Router.pathname !== "/about"
                ? "hover:opacity-90 transition-opacity"
                : ""
            }
              `}
          >
            ABOUT
          </a>
        </Link>
      </li>
      <li>
        <Link href={`/projects`}>
          <a
            className={`${
              Router.pathname !== "/projects" ? "opacity-70" : "opacity-100"
            } ${
              Router.pathname !== "/projects"
                ? "hover:opacity-90 transition-opacity"
                : ""
            }`}
          >
            WORKS
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
