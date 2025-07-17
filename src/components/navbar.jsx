import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[60px]">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <a href="/" className="flex items-center">
          {t("Asosiy")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <a href="/robes" className="flex items-center">
          {t("Xalatlar")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <a href="/towels" className="flex items-center">
          {t("Sochiqlar")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <a href="/about" className="flex items-center">
          {t("Biz haqimizda")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <a href="/contact" className="flex items-center">
          {t("Kontakt")}
        </a>
      </Typography>

      <div className="flex items-center gap-[20px]">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-bold"
        >
          <a href="/liked" className="flex items-center">
            <FcLike className="text-[23px]" />
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-bold"
        >
          <a href="/korzina" className="flex items-center">
            <FaShoppingCart className="text-[23px]" />
          </a>
        </Typography>
      </div>

      <div className="flex gap-2 items-center ml-2">
        <button
          onClick={() => i18n.changeLanguage("uz")}
          className="text-sm font-bold"
        >
          UZ
        </button>
        <span>|</span>
        <button
          onClick={() => i18n.changeLanguage("ru")}
          className="text-sm font-bold"
        >
          RU
        </button>
      </div>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-4xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer lg:text-[25px] font-bold"
        >
          Saipov group
        </Typography>

        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
}
