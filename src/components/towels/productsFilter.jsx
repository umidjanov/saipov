import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useTranslation } from "react-i18next";
import { NavbarDefault } from "../navbar";

const dummyTowels = [
  { id: 1, name: "Набор полотенец 4 шт", price: 25 },
  { id: 2, name: "Полотенце детское", price: 15 },
  { id: 3, name: "Набор полотенец 5 шт", price: 27 },
  { id: 4, name: "Полотенце банное", price: 22 },
  { id: 5, name: "Полотенце с вышивкой", price: 30 },
];

const ProductsFilter = () => {
  // const { t } = useTranslation();
  const [sortOption, setSortOption] = useState("name-asc");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sortedTowels = [...dummyTowels].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const filteredTowels = sortedTowels.filter((item) => {
    const isAboveMin = minPrice === "" || item.price >= Number(minPrice);
    const isBelowMax = maxPrice === "" || item.price <= Number(maxPrice);
    return isAboveMin && isBelowMax;
  });

  return (
    <>
      <NavbarDefault />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:gap-6 mb-8 gap-4"
          data-aos="fade-up"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Saralash</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-48"
            >
              <option value="name-asc">Alifbo boʻyicha (A–Z)</option>
              <option value="name-desc">Alifbo boʻyicha (Z–A)</option>
              <option value="price-asc">Narx boʻyicha (kam → koʻp)</option>
              <option value="price-desc">Narx boʻyicha (koʻp → kam)</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Eng kam narx
              </label>
              <input
                type="number"
                min="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border rounded px-3 py-2 text-sm w-32"
                placeholder={"Eng kam narx"}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Eng koʻp narx
              </label>
              <input
                type="number"
                min="0"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border rounded px-3 py-2 text-sm w-32"
                placeholder={"Eng koʻp narx"}
              />
            </div>
          </div>
        </div>

        {filteredTowels.length > 0 ? (
          <ul
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
            data-aos="fade-up"
          >
            {filteredTowels.map((item) => (
              <li
                key={item.id}
                className="bg-white p-4 rounded shadow-sm border flex flex-col justify-between hover:shadow-md transition duration-300"
                data-aos="zoom-in"
              >
                <h3 className="text-sm font-semibold mb-2">{item.name}</h3>
                <span className="text-gray-600 text-sm">{item.price} $</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm" data-aos="fade-up">
            {t("towels2.noProducts")}
          </p>
        )}
      </div>
    </>
  );
};

export default ProductsFilter;
