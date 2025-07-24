import { Footer } from "../../components/footer";
import { NavbarDefault } from "../../components/navbar";
import useStore from "../../store/useStore";
import { useTranslation } from "react-i18next";

export default function Korzina() {
	const { t } = useTranslation();
	const cart = useStore((state) => state.cart);
	const removeFromCart = useStore((state) => state.removeFromCart);
	const setCart = useStore((state) => state.setCart);

	// Change count for a product
	const changeCount = (name, delta) => {
		const item = cart.find((i) => i.name === name);
		console.log(item);

		if (!item) return;
		if (item.count == 1 && delta == -1) {
			console.log(`Removing ${name} from cart`);

			removeFromCart(name);
		} else {
			setCart(
				cart.map((i) =>
					i.name === name
						? { ...i, count: (i.count || 1) + delta }
						: i
				)
			);
		}
	};

	return (
		<div className="bg-[#f7f7f7] text-gray-900 font-sans min-h-screen pt-[40px]">
			<NavbarDefault />
			<div className="max-w-6xl mx-auto px-4 py-12">
				<h1 className="text-2xl font-bold mb-6">
					{t("cart_title")}
				</h1>
				{cart.length === 0 ? (
					<p className="text-gray-600">{t("cart_empty")}</p>
				) : (
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
						{cart.map((item, index) => (
							<div
								key={index}
								className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
							>
								<img
									src={item.image}
									alt={item.name}
									className="w-full h-52 object-cover rounded mb-4"
								/>
								<h3 className="text-lg font-semibold mt-2 text-center">
									{item.name}
								</h3>
								<p className="text-base text-gray-500 mb-2">
									{item.price}
								</p>
								<div className="flex justify-center items-center gap-2 mt-2">
									<button
										onClick={() =>
											changeCount(item.name, -1)
										}
										className="mt-auto bg-black text-white text-sm px-4 py-1 rounded transition"
									>
										-
									</button>
									<span className="text-2xl font-bold px-4 min-w-[40px] text-center">
										{item.count || 1}
									</span>
									<button
										onClick={() =>
											changeCount(item.name, 1)
										}
										className="mt-auto bg-black text-white text-sm px-4 py-1 rounded transition"
									>
										+
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}
