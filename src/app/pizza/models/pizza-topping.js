export class PizzaTopping {
  #name;
  #calories;
  #sum;
  #image = '';
  constructor(name, calories, sum, image) {
    this.#name = name;
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

  get calories() {
    return this.#calories;
  }

  getPrice(size) {
    return this.#sum[size.key];
  }

  get sum() {
    return this.#sum;
  }
}