import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <nav className={`fixed z-50 w-full mt-12 mb-8`}>
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
      <li>
        <Link href={`/`}>
          <a className={Router.pathname !== "/" ? "opacity-50" : "opacity-100"}>
            HOME
          </a>
        </Link>
      </li>
      <li>
        <Link href={`/about`}>
          <a
            className={
              Router.pathname !== "/about" ? "opacity-70" : "opacity-100"
            }
          >
            ABOUT
          </a>
        </Link>
      </li>
      <li>
        <Link href={`/projects`}>
          <a
            className={
              Router.pathname !== "/projects" ? "opacity-70" : "opacity-100"
            }
          >
            WORKS
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
