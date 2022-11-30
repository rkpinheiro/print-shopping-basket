"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var mocks_1 = require("./mocks");
var types_1 = require("./types");
(0, globals_1.test)("intialize basket item", function () {
    var description = "some description";
    var basketInput = {
        quantity: 1,
        description: description,
        price: 1,
    };
    var basketItem = new types_1.BasketItem(basketInput);
    (0, globals_1.expect)(basketItem.quantity).toBe(1);
    (0, globals_1.expect)(basketItem.description).toBe(description);
    (0, globals_1.expect)(basketItem.quantity).toBe(1);
});
(0, globals_1.test)("basket item calculate total without tax", function () {
    var description = "some book description";
    var basketInput = {
        quantity: 2,
        description: description,
        price: 2.4,
    };
    var basketItem = new types_1.BasketItem(basketInput);
    (0, globals_1.expect)(basketItem.getTotal()).toBe(2 * 2.4);
});
(0, globals_1.test)("ignore tax for food", function () {
    var description = "some chocolate description";
    var basketInput = {
        quantity: 1,
        description: description,
        price: 2.4,
    };
    var basketItem = new types_1.BasketItem(basketInput);
    (0, globals_1.expect)(basketItem.getTotal()).toBe(2.4);
});
(0, globals_1.test)("ignore tax for book", function () {
    var description = "some book description";
    var basketInput = {
        quantity: 1,
        description: description,
        price: 2.3,
    };
    var basketItem = new types_1.BasketItem(basketInput);
    (0, globals_1.expect)(basketItem.getTotal()).toBe(2.3);
});
(0, globals_1.test)("ignore tax for medical", function () {
    var description = "some pills description";
    var basketInput = {
        quantity: 2,
        description: description,
        price: 2.5,
    };
    var basketItem = new types_1.BasketItem(basketInput);
    (0, globals_1.expect)(basketItem.getTotal()).toBe(2 * 2.5);
});
(0, globals_1.test)("calculate shopping sales taxes for input 1", function () {
    var shoppingBasket = mocks_1.shoppingBasket1;
    (0, globals_1.expect)(shoppingBasket.getSalesTaxes()).toBe(1.5);
    (0, globals_1.expect)(shoppingBasket.getTotal()).toBe(42.32);
});
