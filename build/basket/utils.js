"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.round005 = void 0;
var round005 = function (num) {
    return parseFloat((Math.ceil(num * 20) / 20).toFixed(2));
};
exports.round005 = round005;
var round = function (num) {
    if (Number.isInteger(num)) {
        return num;
    }
    if (num.toString().split(".")[1].length > 3) {
        return parseFloat((Math.ceil(num * 20) / 20).toFixed(2));
    }
    return parseFloat(num.toFixed(2));
};
exports.round = round;
