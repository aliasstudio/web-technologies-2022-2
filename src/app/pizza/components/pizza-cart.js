import { Pizza } from "../models/pizza.js";
import { PizzaSize } from "../models/pizza-size.js";
import { PizzaTopping } from "../models/pizza-topping.js";

export class PizzaCart {
  #selector = '';
  #pizzaList = new Map();
  #toppingsList = new Map();
  #selectedSize = PizzaSize.Small;
  selectedPizza;

  constructor(selector, pizzaList, toppingsList) {
    this.#selector = selector;

    pizzaList.forEach(
        pizza =>
        this.#pizzaList.set(pizza.key, new Pizza(pizza.name, PizzaSize.Small, pizza.calories, pizza.sum, pizza.image))
    );
    this.#selectPizza(this.#pizzaList.entries().next().value[0]);

    toppingsList.forEach(
        topping =>
            this.#toppingsList.set(topping.key, new PizzaTopping(topping.name, topping.calories, topping.sum, topping.image))
    );
  }

  #renderCartBtn() {
    const cartBtn = document.querySelector(`${this.#selector} input.orange-btn`);
    cartBtn.value = `Добавить в корзину за ${this.selectedPizza.sum} ₽ (${this.selectedPizza.calories} кКалл)`;
  }

  #renderPrices() {
    const pizzaItems = document.querySelectorAll(`${this.#selector} .pizza-item`);
    const toppingItems = document.querySelectorAll(`${this.#selector} .topping-item`);

    pizzaItems.forEach(item => {
      const pizza = this.#pizzaList.get(item.id);

      item.querySelector('span.money').innerHTML = `
        <span>${pizza.getPrice(this.#selectedSize)}</span>
        <span>₽</span>
      `;
    });

    toppingItems.forEach(item => {
      const topping = this.#toppingsList.get(item.id);

      item.querySelector('span.money').innerHTML = `
        <span>${topping.getPrice(this.#selectedSize)}</span>
        <span>₽</span>
      `;
    });

    this.#renderCartBtn();
  }

  #selectPizza(key) {
    const toppingBtn = document.querySelectorAll(`${this.#selector} .topping-item`);

    this.selectedPizza = this.#pizzaList.get(key);
    this.selectedPizza.size = this.#selectedSize;
    this.selectedPizza.clearTopping();

    toppingBtn.forEach(item => item.classList.remove('active'));
  }

  #renderPizza() {
    let pizzaHTML = '';

    this.#pizzaList.forEach((pizza, key) => {
      pizzaHTML += `
        <button class="pizza-item" id="${key}">
          <img src="${pizza?.image}" alt="${pizza.name}"/>
          <span>${pizza.name}</span>
          <span class="money">
            <span>${pizza.getPrice(this.#selectedSize)}</span>
            <span>₽</span>
          </span>
        </button>
      `;
    });

    return pizzaHTML;
  }

  #renderToppings() {
    let toppingHTML = '';

    this.#toppingsList.forEach((topping, key) => {
      toppingHTML += `
        <button class="topping-item" id="${key}">
          <img src="${topping?.image}" alt="${topping.name}"/>
          <span>${topping.name}</span>
          <span class="money">
            <span>${topping.getPrice(this.#selectedSize)}</span>
            <span>₽</span>
          </span>
        </button>
      `;
    });

    return toppingHTML;
  }

  #renderHTML() {
    const pizzaCart = document.querySelector(this.#selector);

    pizzaCart.innerHTML = `
    <div class="pizza-cart__wrapper">
      <div class="pizza-select">
        ${this.#renderPizza()}
      </div>
      <div class="pizza-params">
        <div class="pizza-size">
          <h3>Выберите размер</h3>
          <div class="pizza-size__select">
            <input type="radio" id="radio-one" name="pizza-size" value="small" checked/>
            <label for="radio-one">Маленькая</label>
            <input type="radio" id="radio-two" name="pizza-size" value="big" />
            <label for="radio-two">Большая</label>
          </div>
        </div>
        <div class="pizza-toppings">
          <h3>Добавить по вкусу</h3>
          <div class="pizza-toppings__select">
            ${this.#renderToppings()}
          </div>
        </div>
        <input class="orange-btn" type="submit" value="Добавить в корзину за ${this.selectedPizza.sum} ₽ (${this.selectedPizza.calories} кКалл)"/>
      </div>
    </div>`;
  }

  render() {
    this.#renderHTML();

    const pizzaBtn = document.querySelectorAll(`${this.#selector} .pizza-item`);
    const toppingBtn = document.querySelectorAll(`${this.#selector} .topping-item`);
    const sizeSwitch = document.querySelectorAll(`${this.#selector} .pizza-size__select input[type="radio"]`);

    pizzaBtn[0].classList.add('active');

    pizzaBtn.forEach(btn => btn.addEventListener('click', (e) => {
      pizzaBtn.forEach(item => item.classList.remove('active'));
      btn.classList.add('active');
      this.#selectPizza(btn.id);
      this.#renderCartBtn();
    }));

    toppingBtn.forEach(btn => btn.addEventListener('click', () => {
      if(btn.classList.contains('active')) {
        btn.classList.remove('active');
        this.selectedPizza.removeTopping(this.#toppingsList.get(btn.id));
        this.#renderCartBtn();
        return;
      }

      btn.classList.add('active');
      this.selectedPizza.addTopping(this.#toppingsList.get(btn.id));
      this.#renderCartBtn();
    }));

    sizeSwitch.forEach(radio => radio.addEventListener('change', () => {
      const size = radio.value === 'small' ? PizzaSize.Small : PizzaSize.Big;

      this.#selectedSize = size;
      this.selectedPizza.size = size;

      this.#renderPrices();
    }));
  }
}