import { Footer } from "../../components/footer";
import { NavbarDefault } from "../../components/navbar";
import { robeProducts } from "../../data/product";
import useStore from "../../store/useStore";

export default function CardUiRobe() {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="bg-[#f7f7f7] text-gray-900 font-sans">
      <NavbarDefault />
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Халаты</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {robeProducts.map((product, index) => (
            <div
              key={index}
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
                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto bg-black text-white text-sm px-4 py-1 rounded transition"
                >
                  Добавить в корзину
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
