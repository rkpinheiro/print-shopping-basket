import { BasketItem, ShoppingBasket } from "./types";

export const basketItems1 = [
  new BasketItem({ quantity: 2, description: "book", price: 12.49 }),
  new BasketItem({ quantity: 1, description: "music CD", price: 14.99 }),
  new BasketItem({ quantity: 1, description: "chocolate bar", price: 0.85 }),
];

export const basketItems2 = [
  new BasketItem({
    quantity: 1,
    description: "imported box of chocolates",
    price: 10.0,
  }),
  new BasketItem({
    quantity: 1,
    description: "imported bottle of perfume",
    price: 47.5,
  }),
];

export const basketItems3 = [
  new BasketItem({
    quantity: 1,
    description: "imported bottle of perfume",
    price: 27.99,
  }),
  new BasketItem({
    quantity: 1,
    description: "bottle of perfume",
    price: 18.99,
  }),
  new BasketItem({
    quantity: 1,
    description: "packet of headache pills",
    price: 9.75,
  }),
  new BasketItem({
    quantity: 3,
    description: "imported boxes of chocolates",
    price: 11.25,
  }),
];

export const shoppingBasket1 = new ShoppingBasket(basketItems1);
export const shoppingBasket2 = new ShoppingBasket(basketItems2);
export const shoppingBasket3 = new ShoppingBasket(basketItems3);
