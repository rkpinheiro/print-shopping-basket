"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocks_1 = require("./basket/mocks");
function printShoppingBasket(shoppingBasket) {
    console.log("Input:");
    shoppingBasket.getItems().map(function (i) { return console.log(i.toString()); });
    console.log("\n");
    console.log("Output:");
    shoppingBasket
        .getItems()
        .map(function (i) {
        return console.log("".concat(i.quantity, " ").concat(i.description, ": ").concat(i.getTotal().toFixed(2)));
    });
    console.log("Sales Taxes:", shoppingBasket.getSalesTaxes().toFixed(2));
    console.log("Total:", shoppingBasket.getTotal().toFixed(2));
    console.log("----------------------------------");
    console.log("\n");
    return;
}
printShoppingBasket(mocks_1.shoppingBasket1);
printShoppingBasket(mocks_1.shoppingBasket2);
printShoppingBasket(mocks_1.shoppingBasket3);
