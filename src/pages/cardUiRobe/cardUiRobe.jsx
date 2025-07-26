import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "../../components/footer";
import { NavbarDefault } from "../../components/navbar";
import { robeProducts } from "../../data/product";
import useStore from "../../store/useStore";
import ProductsFilter from "../../components/towels/productsFilter";

export default function CardUiRobe() {
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);
  const setCart = useStore((state) => state.setCart);
  const removeFromCart = useStore((state) => state.removeFromCart);

  // Change count for a product
  const changeCount = (name, delta) => {
    const item = cart.find((i) => i.name === name);
    console.log(item);
    if (!item) return;
    if (item.count === 1 && delta === -1) {
      console.log(`Removing ${name} from cart`);
      removeFromCart(name);
    } else {
      setCart(
        cart.map((i) =>
          i.name === name ? { ...i, count: (i.count || 1) + delta } : i
        )
      );
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-[#f7f7f7] text-gray-900 font-sans pt-[40px]">
      <NavbarDefault />
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-up">
          Xalatlar
        </h2>
        <ProductsFilter />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {robeProducts.map((product, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition relative group flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col flex-1 gap-[8px]">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{product.price}</p>
                {(() => {
                  const cartItem = cart.find((i) => i.name === product.name);
                  if (cartItem) {
                    return (
                      <div className="flex justify-center items-center gap-2 mt-2">
                        <button
                          onClick={() => changeCount(product.name, -1)}
                          className="mt-auto bg-black text-white text-sm px-4 py-1 rounded transition"
                        >
                          -
                        </button>
                        <span className="text-lg font-bold px-2 min-w-[32px] text-center">
                          {cartItem.count || 1}
                        </span>
                        <button
                          onClick={() => changeCount(product.name, 1)}
                          className="mt-auto bg-black text-white text-sm px-4 py-1 rounded transition"
                        >
                          +
                        </button>
                      </div>
                    );
                  } else {
                    return (
                      <button
                        onClick={() => addToCart(product)}
                        className="mt-auto bg-black text-white text-sm px-4 py-1 rounded transition"
                      >
                        Добавить в корзину
                      </button>
                    );
                  }
                })()}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
