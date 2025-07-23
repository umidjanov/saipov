import { Typography } from "@material-tailwind/react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const currentYear = new Date().getFullYear();

export function Footer() {
  const { t } = useTranslation();

  const SITEMAP = [
    {
      title: t("footer.company"),
      links: [
        t("footer.aboutUs"),
        t("footer.careers"),
        t("footer.ourTeam"),
        t("footer.projects"),
      ],
    },
    {
      title: t("footer.helpCenter"),
      links: [
        t("footer.discord"),
        t("footer.twitter"),
        t("footer.github"),
        t("footer.contactUs"),
      ],
    },
    {
      title: t("footer.resources"),
      links: [
        t("footer.blog"),
        t("footer.newsletter"),
        t("footer.freeProducts"),
        t("footer.affiliateProgram"),
      ],
    },
    {
      title: t("footer.products"),
      links: [
        t("footer.templates"),
        t("footer.uiKits"),
        t("footer.icons"),
        t("footer.mockups"),
      ],
    },
  ];

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
            &copy; {currentYear} <a>Material Tailwind</a>. {t("footer.rights")}
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {[FaFacebook, FaInstagram, FaTwitter, FaTelegramPlane].map(
              (Icon, index) => (
                <Typography
                  as="a"
                  key={index}
                  href="https://t.me/elteksterrytowel"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <Icon className="text-[22px]" />
                </Typography>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
