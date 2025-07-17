import React, { useState } from "react";
import { NavbarDefault } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { div } from "framer-motion/client";

const dummyTowels = [
  { id: 1, name: "Набор полотенец 4 шт", price: 25 },
  { id: 2, name: "Полотенце детское", price: 15 },
  { id: 3, name: "Набор полотенец 5 шт", price: 27 },
  { id: 4, name: "Полотенце банное", price: 22 },
  { id: 5, name: "Полотенце с вышивкой", price: 30 },
];

const TowelsPage = () => {
  const [sortOption, setSortOption] = useState("name-asc");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // 🔽 Сортировка
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

  // 🔍 Фильтрация по цене
  const filteredTowels = sortedTowels.filter((item) => {
    const isAboveMin = minPrice === "" || item.price >= Number(minPrice);
    const isBelowMax = maxPrice === "" || item.price <= Number(maxPrice);
    return isAboveMin && isBelowMax;
  });

  return (
    <>
      <NavbarDefault />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Полотенца</h1>

        {/* Сортировка и фильтр */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6 mb-8 gap-4">
          {/* Сортировка */}
          <div>
            <label className="block text-sm font-medium mb-1">Сортировка</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded px-3 py-2 text-sm w-48"
            >
              <option value="name-asc">По алфавиту (A–Z)</option>
              <option value="name-desc">По алфавиту (Z–A)</option>
              <option value="price-asc">По цене (мин → макс)</option>
              <option value="price-desc">По цене (макс → мин)</option>
            </select>
          </div>

          {/* Мин / Макс */}
          <div className="flex gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Мин. цена
              </label>
              <input
                type="number"
                min="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border rounded px-3 py-2 text-sm w-32"
                placeholder="от"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Макс. цена
              </label>
              <input
                type="number"
                min="0"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border rounded px-3 py-2 text-sm w-32"
                placeholder="до"
              />
            </div>
          </div>
        </div>

        {/* Список товаров */}
        {filteredTowels.length > 0 ? (
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredTowels.map((item) => (
              <li
                key={item.id}
                className="bg-white p-4 rounded shadow-sm border flex flex-col justify-between"
              >
                <h3 className="text-sm font-semibold mb-2">{item.name}</h3>
                <span className="text-gray-600 text-sm">{item.price} $</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">
            Нет товаров по выбранным критериям.
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TowelsPage;
