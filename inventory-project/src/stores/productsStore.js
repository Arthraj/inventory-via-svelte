import { writable } from "svelte/store";
export const productsStore=writable([]);
export const setProducts = (data) => {
    productsStore.set(data);
};
export const deleteProduct = (productName) => {
    productsStore.update((products) => {
        return products.filter((product) => product.name !== productName);
    });
};