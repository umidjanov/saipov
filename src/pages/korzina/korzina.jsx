import { Footer } from "../../components/footer";
import { NavbarDefault } from "../../components/navbar";
import useStore from "../../store/useStore";
import React, { useState } from "react";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";

export default function Korzina() {
	const cart = useStore((state) => state.cart);
	const removeFromCart = useStore((state) => state.removeFromCart);
	const setCart = useStore((state) => state.setCart);
	const [modalOpen, setModalOpen] = useState(false);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [submitted, setSubmitted] = useState(false);

	// Change count for a product
	const changeCount = (name, delta) => {
		const item = cart.find((i) => i.name === name);
		if (!item) return;
		if (item.count == 1 && delta == -1) {
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
				<h1 className="text-2xl font-bold mb-6">Savatcha</h1>
				{cart.length === 0 ? (
					<p className="text-gray-600">
						Savatcha hozircha bo'sh.
					</p>
				) : (
					<>
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
												changeCount(
													item.name,
													-1
												)
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
												changeCount(
													item.name,
													1
												)
											}
											className="mt-auto bg-black text-white text-sm px-4 py-1 rounded transition"
										>
											+
										</button>
									</div>
								</div>
							))}
						</div>
						<div className="flex justify-end mt-8">
							<Dialog
								open={modalOpen}
								onOpenChange={setModalOpen}
							>
								<DialogTrigger asChild>
									<Button className="px-8 py-3 text-lg font-semibold">
										Оформить заказ
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>
											Оформление заказа
										</DialogTitle>
									</DialogHeader>
									{submitted ? (
										<div className="py-6 text-center">
											<div className="text-lg mb-2 font-semibold">
												Спасибо за заказ!
											</div>
											<div className="text-gray-500">
												Мы свяжемся с вами для
												подтверждения.
											</div>
											<Button
												className="mt-6 w-full"
												onClick={() => {
													setSubmitted(
														false
													);
													setModalOpen(
														false
													);
													setName("");
													setPhone("");
												}}
											>
												Закрыть
											</Button>
										</div>
									) : (
										<form
											className="space-y-4"
											onSubmit={(e) => {
												e.preventDefault();
												setSubmitted(true);
											}}
										>
											<div>
												<Label htmlFor="name">
													Имя
												</Label>
												<Input
													id="name"
													value={name}
													onChange={(e) =>
														setName(
															e.target
																.value
														)
													}
													required
													placeholder="Ваше имя"
												/>
											</div>
											<div>
												<Label htmlFor="phone">
													Телефон
												</Label>
												<Input
													id="phone"
													value={phone}
													onChange={(e) =>
														setPhone(
															e.target
																.value
														)
													}
													required
													placeholder="+998 90 123 45 67"
													type="tel"
												/>
											</div>
											<DialogFooter>
												<Button
													type="submit"
													className="w-full"
												>
													Отправить
												</Button>
											</DialogFooter>
										</form>
									)}
								</DialogContent>
							</Dialog>
						</div>
					</>
				)}
			</div>
			<Footer />
		</div>
	);
}
