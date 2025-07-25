import React, { useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { NavbarDefault } from "../../components/navbar";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const dummyRobes = [
  { id: 1, name_uz: "Erkaklar xalat", name_ru: "Халат мужской", price: 40 },
  { id: 2, name_uz: "Ayollar xalat", name_ru: "Халат женский", price: 38 },
  { id: 3, name_uz: "Bolalar xalati", name_ru: "Детский халат", price: 32 },
  {
    id: 4,
    name_uz: "Kapishonli xalat",
    name_ru: "Халат с капюшоном",
    price: 44,
  },
  { id: 5, name_uz: "Nakashli xalat", name_ru: "Халат с вышивкой", price: 47 },
];

const Robes = () => {
  const { t, i18n } = useTranslation();
  const [sortOption, setSortOption] = useState("name-asc");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sortedRobes = [...dummyRobes].sort((a, b) => {
    const lang = i18n.language;
    const aName = lang === "uz" ? a.name_uz : a.name_ru;
    const bName = lang === "uz" ? b.name_uz : b.name_ru;

    switch (sortOption) {
      case "name-asc":
        return aName.localeCompare(bName);
      case "name-desc":
        return bName.localeCompare(aName);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const filteredRobes = sortedRobes.filter((item) => {
    const isAboveMin = minPrice === "" || item.price >= Number(minPrice);
    const isBelowMax = maxPrice === "" || item.price <= Number(maxPrice);
    return isAboveMin && isBelowMax;
  });

  return (
    <>
      <NavbarDefault />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6 mb-8 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              {t("robes2.sort")}
            </label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-48"
            >
              <option value="name-asc">{t("robes2.sortNameAsc")}</option>
              <option value="name-desc">{t("robes2.sortNameDesc")}</option>
              <option value="price-asc">{t("robes2.sortPriceAsc")}</option>
              <option value="price-desc">{t("robes2.sortPriceDesc")}</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("robes2.minPrice")}
              </label>
              <input
                type="number"
                min="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border rounded px-3 py-2 text-sm w-32"
                placeholder={t("robes2.from")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("robes2.maxPrice")}
              </label>
              <input
                type="number"
                min="0"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border rounded px-3 py-2 text-sm w-32"
                placeholder={t("robes2.to")}
              />
            </div>
          </div>
        </div>

        {filteredRobes.length > 0 ? (
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredRobes.map((item, idx) => (
              <li
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white p-4 rounded shadow-sm border flex flex-col justify-between"
              >
                <h3 className="text-sm font-semibold mb-2">
                  {i18n.language === "uz" ? item.name_uz : item.name_ru}
                </h3>
                <span className="text-gray-600 text-sm">{item.price} $</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">{t("robes2.noResults")}</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Robes;
