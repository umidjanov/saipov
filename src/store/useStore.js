import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      cart: [],
      liked: [],

      addToCart: (item) =>
        set((state) => ({
          cart: [...state.cart, item],
        })),

      removeFromCart: (name) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.name !== name),
        })),

      addToLiked: (item) =>
        set((state) => {
          const exists = state.liked.some((i) => i.name === item.name);
          return exists ? state : { liked: [...state.liked, item] };
        }),

      removeFromLiked: (name) =>
        set((state) => ({
          liked: state.liked.filter((item) => item.name !== name),
        })),
    }),
    {
      name: "saipov-store",
    }
  )
);

export default useStore;
