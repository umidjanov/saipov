import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(
		(set) => ({
			cart: [],
			liked: [],

			addToCart: (item) =>
				set((state) => {
					const existing = state.cart.find(
						(i) => i.name === item.name
					);
					if (existing) {
						return {
							cart: state.cart.map((i) =>
								i.name === item.name
									? {
											...i,
											count: (i.count || 1) + 1,
									  }
									: i
							),
						};
					} else {
						return {
							cart: [
								...state.cart,
								{ ...item, count: 1 },
							],
						};
					}
				}),

			removeFromCart: (name) =>
				set((state) => ({
					cart: state.cart.filter(
						(item) => item.name !== name
					),
				})),

			addToLiked: (item) =>
				set((state) => {
					const exists = state.liked.some(
						(i) => i.name === item.name
					);
					return exists
						? state
						: { liked: [...state.liked, item] };
				}),

			removeFromLiked: (name) =>
				set((state) => ({
					liked: state.liked.filter(
						(item) => item.name !== name
					),
				})),

			setCart: (cart) =>
				set(() => ({
					cart: cart.filter(
						(item) => (item.count || 1) > 0
					),
				})),
		}),
		{
			name: "saipov-store",
		}
	)
);

export default useStore;
