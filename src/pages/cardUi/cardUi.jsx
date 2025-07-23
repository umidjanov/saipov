import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "../../components/footer";
import { NavbarDefault } from "../../components/navbar";
import { towelProducts } from "../../data/product";
import useStore from "../../store/useStore";
import { useTranslation } from "react-i18next";

export default function CardUi() {
  const addToCart = useStore((state) => state.addToCart);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-[#f7f7f7] text-gray-900 font-sans pt-[40px]">
      <NavbarDefault />
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-up">
          {t("towels3.title")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {towelProducts.map((product, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition relative group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[208px] object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 bg-black text-white px-4 py-1 text-sm rounded hover:bg-gray-800 transition"
                >
                  {t("towels3.addToCart")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
