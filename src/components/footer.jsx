import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white px-4 sm:px-6 py-10 sm:py-12 text-sm font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-10">
        {/* KATALOG */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            {t("footer.catalog")}
          </h3>
          <ul className="flex flex-col gap-[10px] text-[#d2d2d2]">
            <Link to="/">
              <li className="cursor-pointer">{t("footer.clothing")}</li>
            </Link>
            <Link to="/robes">
              <li className="cursor-pointer">{t("footer.shoes")}</li>
            </Link>
            <Link to="/towels">
              <li className="cursor-pointer">{t("footer.accessories")}</li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer">{t("footer.priceCalc")}</li>
            </Link>
          </ul>
          <div className="mt-6">
            <img
              src="media/image 2 (3).png"
              alt="SAIPOV GROUP"
              className="h-14 sm:h-16 w-auto"
            />
          </div>
        </div>

        {/* ИНФОРМАЦИЯ */}
        <div>
          <h3 className="text-white font-semibold mb-4">{t("footer.info")}</h3>
          <ul className="space-y-2 text-[#d2d2d2]">
            <Link to="/contact">
              <li className="cursor-pointer">{t("footer.contacts")}</li>
            </Link>
            <li className="cursor-pointer">{t("footer.faq")}</li>
          </ul>
          <div className="mt-6 text-gray-400 text-xs">
            {t("footer.dev")}
            <br />
            <span className="text-white">JaTech</span>
          </div>
        </div>

        {/* КОНТАКТЫ */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            {t("footer.contacts")}
          </h3>
          <p className="text-[#d2d2d2] mb-2">saipovgroup@gmail.com</p>
          <p className="text-[#d2d2d2] mb-4">+7 993 608 38 85</p>
          <p className="text-white font-semibold mb-2">
            {t("footer.messengers")}
          </p>
          <div className="flex items-center space-x-3 text-lg mb-4">
            <a
              href="https://t.me/elteksterrytowel"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane className="text-[#27A6E5] text-[28px]" />
            </a>
            <FaWhatsapp className="text-[#25D366] text-[28px] cursor-pointer" />
            <BsInstagram className="text-[#ff4866] text-[24px] cursor-pointer" />
          </div>
          <p className="text-white font-semibold mb-2">{t("footer.socials")}</p>
        </div>

        {/* ПОДПИСКА */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            {t("footer.subscribe")}
          </h3>
          <p className="text-[#d2d2d2] mb-4">{t("footer.subscribeDesc")}</p>
          <div className="flex items-center border-b border-white py-1 mb-3">
            <input
              type="email"
              placeholder={t("footer.email")}
              className="bg-transparent outline-none text-white placeholder:text-[#ccc] flex-1 text-sm"
            />
            <button>
              <IoMdArrowDropright className="text-white text-2xl" />
            </button>
          </div>
          <p className="text-[#999] text-xs">{t("footer.privacyAgree")}</p>
          <div className="mt-3 text-xs text-[#ccc] underline space-y-1">
            <div>{t("footer.privacyPolicy")}</div>
            <div>{t("footer.userAgreement")}</div>
          </div>
        </div>
      </div>

      <Typography
        variant="small"
        className="text-center font-normal text-[#ffffff] text-xs sm:text-sm"
      >
        &copy; {currentYear} Saipov Group — {t("footer.rights")}
      </Typography>
    </footer>
  );
};
