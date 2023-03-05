import { PizzaList } from '/data/PizzaList.js';
import { PizzaToppingsList } from '/data/PizzaToppingsList.js';
import { Pizza, PizzaSize, PizzaTopping } from '/src/pizza/pizza.js';

const pizzaList = new Map();
const pizzaToppingsList = new Map();

PizzaList.forEach(pizza => {
    pizzaList.set(pizza.key, new Pizza(pizza.name, PizzaSize.Small, pizza.calories, pizza.sum));
  });

PizzaToppingsList.forEach(topping => {
    pizzaToppingsList.set(topping.key, new PizzaTopping(topping.name, topping.calories, topping.sum));
  });

const pizza = pizzaList.get('margarita');

logPizzaInfo(pizza);
pizza.addTopping(pizzaToppingsList.get('cheeseSide'));
pizza.addTopping(pizzaToppingsList.get('cheddarAndParmesan'));
logPizzaInfo(pizza);

pizza.removeTopping(pizzaToppingsList.get('cheeseSide'));
logPizzaInfo(pizza);

pizza.size = PizzaSize.Big;
logPizzaInfo(pizza);

function logPizzaInfo(pizza) {
  let pizzaInfo =
  `
    Название: ${pizza.name}
    Размер: ${pizza.size}
    Калорийность: ${pizza.calories} Ккал
    Сумма: ${pizza.sum} Руб
    Добавки: ${pizza.toppings.map(topping => topping.name).join(', ')}
  `;
  console.log(pizzaInfo);
}
