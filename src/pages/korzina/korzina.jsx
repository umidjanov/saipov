import { Footer } from "../../components/footer";
import { NavbarDefault } from "../../components/navbar";
import useStore from "../../store/useStore";

export default function Korzina() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);

  return (
    <div className="bg-[#f7f7f7] text-gray-900 font-sans min-h-screen">
      <NavbarDefault />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Корзина</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Корзина пуста</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-4 flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-sm font-medium mt-2">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.price}</p>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="mt-4 bg-red-500 text-white py-1 rounded hover:bg-red-600 transition text-sm"
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
