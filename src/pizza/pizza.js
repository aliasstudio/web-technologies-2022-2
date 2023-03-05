export class Pizza {
  #name = 'none';
  #size = PizzaSize.Small;
  #calories = 0;
  #sum = 0;
  #toppings = [];

  constructor(name, size, calories, sum) {
    this.#name = name;
    this.#size = size;
    this.#calories = calories;
    this.#sum = sum;
  }

  get name() {
    return this.#name;
  }

  get size() {
    return this.#size.name;
  }

  set size(size) {
    this.#size = size;
    return;
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
    if(!this.#toppings.find(x => x.name == topping.name)) {
      this.#toppings.push(topping);
      return;
    }
    throw new Error('This topping alredy in pizza!');
  }

  // Убрать добавку
  removeTopping(topping) {
    let index = this.#toppings.indexOf(topping);
    if(index != -1) {
      this.#toppings.splice(index, 1);
      return;
    }
    throw new Error('Topping does not exist!');
  }
}

export class PizzaTopping {
  #name;
  #calories;
  #sum;

  constructor(name, calories, sum) {
    this.#name = name;
    this.#calories = calories;
    this.#sum = sum;
  }

  get name() {
    return this.#name;
  }

  get calories() {
    return this.#calories;
  }

  get sum() {
    return this.#sum;
  }
}

export class PizzaSize {
  static Small = {
    key: 'small',
    name: 'Маленькая'
  }
  static Big = {
    key: 'big',
    name: 'Большая'
  }
}
