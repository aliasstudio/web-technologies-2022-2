import { PizzaSize } from "./pizza-size.js";

export class Pizza {
  #name = 'none';
  #size = PizzaSize.Small;
  #calories = 0;
  #sum = 0;
  #toppings = [];
  #image = '';

  constructor(name, size, calories, sum, image) {
    this.#name = name;
    this.#size = size;
    this.#calories = calories;
    this.#sum = sum;
    this.#image = image;
  }

  get image() {
    return '/src/assets/images/' + this.#image;
  }

  get name() {
    return this.#name;
  }

  get size() {
    return this.#size;
  }

  set size(size) {
    this.#size = size;
  }

  get calories() {
    let calories = this.#calories[this.#size.key];
    let toppings = this.#toppings;

    if(toppings.length > 0)
      toppings.forEach(topping => {
        calories += topping.calories[this.#size.key];
      });

    return calories;
  }

  getPrice(size) {
    return this.#sum[size.key];
  }

  get sum() {
    let sum = this.#sum[this.#size.key];
    let toppings = this.#toppings;

    if(toppings.length > 0)
      toppings.forEach(topping => {
        sum += topping.sum[this.#size.key];
      });

    return sum;
  }

  get toppings() {
    return this.#toppings;
  }

  // Добавить добавку
  addTopping(topping) {
    if(!this.#toppings.find(x => x.name === topping.name)) {
      this.#toppings.push(topping);
      return;
    }
    throw new Error('This topping already in pizza!');
  }

  // Убрать добавку
  removeTopping(topping) {
    let index = this.#toppings.indexOf(topping);
    if(index !== -1) {
      this.#toppings.splice(index, 1);
      return;
    }
    throw new Error('Topping does not exist!');
  }

  //Убрать все топпинги
  clearTopping() {
    this.#toppings = [];
  }
}
