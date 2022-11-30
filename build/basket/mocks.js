"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shoppingBasket3 = exports.shoppingBasket2 = exports.shoppingBasket1 = exports.basketItems3 = exports.basketItems2 = exports.basketItems1 = void 0;
var types_1 = require("./types");
exports.basketItems1 = [
    new types_1.BasketItem({ quantity: 2, description: "book", price: 12.49 }),
    new types_1.BasketItem({ quantity: 1, description: "music CD", price: 14.99 }),
    new types_1.BasketItem({ quantity: 1, description: "chocolate bar", price: 0.85 }),
];
exports.basketItems2 = [
    new types_1.BasketItem({
        quantity: 1,
        description: "imported box of chocolates",
        price: 10.0,
    }),
    new types_1.BasketItem({
        quantity: 1,
        description: "imported bottle of perfume",
        price: 47.5,
    }),
];
exports.basketItems3 = [
    new types_1.BasketItem({
        quantity: 1,
        description: "imported bottle of perfume",
        price: 27.99,
    }),
    new types_1.BasketItem({
        quantity: 1,
        description: "bottle of perfume",
        price: 18.99,
    }),
    new types_1.BasketItem({
        quantity: 1,
        description: "packet of headache pills",
        price: 9.75,
    }),
    new types_1.BasketItem({
        quantity: 3,
        description: "imported boxes of chocolates",
        price: 11.25,
    }),
];
exports.shoppingBasket1 = new types_1.ShoppingBasket(exports.basketItems1);
exports.shoppingBasket2 = new types_1.ShoppingBasket(exports.basketItems2);
exports.shoppingBasket3 = new types_1.ShoppingBasket(exports.basketItems3);
