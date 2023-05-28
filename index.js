import { PizzaList } from '/data/PizzaList.js';
import { PizzaToppingsList } from '/data/PizzaToppingsList.js';
import { PizzaCart } from "./src/app/pizza/components/pizza-cart.js";

document.addEventListener("DOMContentLoaded", function(){
  const pizzaCart = new PizzaCart('#pizza-cart', PizzaList, PizzaToppingsList);

  pizzaCart.render();
});