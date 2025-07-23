import { Typography } from "@material-tailwind/react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const SITEMAP = [
  {
    title: "Kompaniya",
    links: ["Biz haqimizda", "Bo‘sh ish o‘rinlari", "Jamoamiz", "Loyihalar"],
  },
  {
    title: "Yordam markazi",
    links: ["Discord", "Twitter", "GitHub", "Biz bilan bog‘lanish"],
  },
  {
    title: "Resurslar",
    links: ["Blog", "Yangiliklar", "Bepul mahsulotlar", "Hamkorlik dasturi"],
  },
  {
    title: "Mahsulotlar",
    links: ["Shablonlar", "UI to‘plamlar", "Belgilar", "Makaplar"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a>Material Tailwind</a>. Barcha huquqlar
            himoyalangan.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <a href="https://t.me/elteksterrytowel">
                <FaFacebook className="text-[22px]" />
              </a>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <a href="https://t.me/elteksterrytowel">
                <FaInstagram className="text-[22px]" />
              </a>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <a href="https://t.me/elteksterrytowel">
                <FaTwitter className="text-[22px]" />
              </a>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <a href="https://t.me/elteksterrytowel">
                <FaTelegramPlane className="text-[22px]" />
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
