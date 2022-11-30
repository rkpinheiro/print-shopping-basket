import { expect, test } from "@jest/globals";
import { shoppingBasket1 } from "./mocks";
import { BasketItem } from "./types";

test("intialize basket item", () => {
  const description = "some description";
  const basketInput = {
    quantity: 1,
    description,
    price: 1,
  };

  const basketItem = new BasketItem(basketInput);
  expect(basketItem.quantity).toBe(1);
  expect(basketItem.description).toBe(description);
  expect(basketItem.quantity).toBe(1);
});

test("basket item calculate total without tax", () => {
  const description = "some book description";
  const basketInput = {
    quantity: 2,
    description,
    price: 2.4,
  };

  const basketItem = new BasketItem(basketInput);
  expect(basketItem.getTotal()).toBe(2 * 2.4);
});

test("ignore tax for food", () => {
  const description = "some chocolate description";
  const basketInput = {
    quantity: 1,
    description,
    price: 2.4,
  };

  const basketItem = new BasketItem(basketInput);
  expect(basketItem.getTotal()).toBe(2.4);
});

test("ignore tax for book", () => {
  const description = "some book description";
  const basketInput = {
    quantity: 1,
    description,
    price: 2.3,
  };

  const basketItem = new BasketItem(basketInput);
  expect(basketItem.getTotal()).toBe(2.3);
});

test("ignore tax for medical", () => {
  const description = "some pills description";
  const basketInput = {
    quantity: 2,
    description,
    price: 2.5,
  };

  const basketItem = new BasketItem(basketInput);
  expect(basketItem.getTotal()).toBe(2 * 2.5);
});

test("calculate shopping sales taxes for input 1", () => {
  const shoppingBasket = shoppingBasket1;
  expect(shoppingBasket.getSalesTaxes()).toBe(1.5);
  expect(shoppingBasket.getTotal()).toBe(42.32);
});
