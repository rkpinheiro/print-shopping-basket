"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingBasket = exports.BasketItem = void 0;
var utils_1 = require("./utils");
var BasketItem = /** @class */ (function () {
    function BasketItem(_a) {
        var quantity = _a.quantity, description = _a.description, price = _a.price;
        this.quantity = quantity;
        this.description = description;
        this.price = price;
        this.priceIncludingTax = this.price * (1 + this.getTax());
    }
    BasketItem.prototype.toString = function () {
        return "".concat(this.quantity, " ").concat(this.description, " at ").concat(this.price);
    };
    BasketItem.prototype.getTax = function () {
        var total = 0;
        if (this.description.includes("imported")) {
            total = total + 5;
        }
        if (!this.description.includes("chocolate") &&
            !this.description.includes("pills") &&
            !this.description.includes("book")) {
            total = total + 10;
        }
        return total / 100;
    };
    BasketItem.prototype.getTotal = function () {
        return (0, utils_1.round)(this.quantity * this.priceIncludingTax);
    };
    BasketItem.prototype.getSalesTaxes = function () {
        return this.quantity * this.price * this.getTax();
    };
    return BasketItem;
}());
exports.BasketItem = BasketItem;
var ShoppingBasket = /** @class */ (function () {
    function ShoppingBasket(items) {
        this.items = items;
    }
    ShoppingBasket.prototype.getItems = function () {
        return this.items;
    };
    ShoppingBasket.prototype.getSalesTaxes = function () {
        var total = 0;
        this.items.forEach(function (i) {
            total = total + i.getSalesTaxes();
        });
        return (0, utils_1.round)(total);
    };
    ShoppingBasket.prototype.getTotal = function () {
        var total = 0;
        this.items.forEach(function (i) {
            total = total + i.getTotal();
        });
        return total;
    };
    return ShoppingBasket;
}());
exports.ShoppingBasket = ShoppingBasket;
