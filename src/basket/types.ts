import { round } from "./utils";

export interface BasketInput {
  quantity: number;
  description: string;
  price: number;
}

export class BasketItem {
  quantity: number;
  description: string;
  priceIncludingTax: number; // TODO: create a Price type
  price: number;

  constructor({ quantity, description, price }: BasketInput) {
    this.quantity = quantity;
    this.description = description;
    this.price = price;
    this.priceIncludingTax = this.price * (1 + this.getTax());
  }

  toString() {
    return `${this.quantity} ${this.description} at ${this.price}`;
  }

  getTax() {
    let total = 0;

    if (this.description.includes("imported")) {
      total = total + 5;
    }

    if (
      !this.description.includes("chocolate") &&
      !this.description.includes("pills") &&
      !this.description.includes("book")
    ) {
      total = total + 10;
    }

    return total / 100;
  }

  getTotal() {
    return round(this.quantity * this.priceIncludingTax);
  }

  getSalesTaxes() {
    return this.quantity * this.price * this.getTax();
  }
}

export class ShoppingBasket {
  items: BasketItem[];

  constructor(items: BasketItem[]) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  getSalesTaxes() {
    let total = 0;
    this.items.forEach((i) => {
      total = total + i.getSalesTaxes();
    });
    return round(total);
  }

  getTotal() {
    let total = 0;
    this.items.forEach((i) => {
      total = total + i.getTotal();
    });
    return total;
  }
}
