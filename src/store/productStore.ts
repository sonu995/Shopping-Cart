import { Product } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type States = {
  products: Array<Product>;
};

type Actions = {
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
};

export const todoStore = create<States & Actions>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        addProduct: (product: Product) =>
          set((state) => ({
            products: [product, ...state.products],
          })),
        deleteProduct: (id: number) =>
          set((state) => ({
            products: state.products.filter((item) => item.id !== id),
          })),
      }),
      { name: "Cart" }
    )
  )
);
