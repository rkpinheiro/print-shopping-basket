import {
  shoppingBasket1,
  shoppingBasket2,
  shoppingBasket3,
} from "./basket/mocks";
import { ShoppingBasket } from "./basket/types";

function printShoppingBasket(shoppingBasket: ShoppingBasket) {
  console.log("Input:");
  shoppingBasket.getItems().map((i) => console.log(i.toString()));
  console.log("\n");
  console.log("Output:");
  shoppingBasket
    .getItems()
    .map((i) =>
      console.log(`${i.quantity} ${i.description}: ${i.getTotal().toFixed(2)}`)
    );
  console.log("Sales Taxes:", shoppingBasket.getSalesTaxes().toFixed(2));
  console.log("Total:", shoppingBasket.getTotal().toFixed(2));
  console.log("----------------------------------");
  console.log("\n");
  return;
}

printShoppingBasket(shoppingBasket1);
printShoppingBasket(shoppingBasket2);
printShoppingBasket(shoppingBasket3);
