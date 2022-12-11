class Customer {
  #year;
  #month;
  #customer;
  #quantity;
  #taxThreshold = 0.1;
  constructor({ customer, quantity, month, year }) {
    this.#customer = customer;
    this.#quantity = quantity;
    this.#month = month;
    this.#year = year;
  }

  get calculateBaseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.base - this.#taxThreshold);
  }

  get base() {
    return this.baseRate * this.quantity;
  }

  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.#quantity;
  }

  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get year() {
    return this.#year;
  }

  get month() {
    return this.#month;
  }

  get quantity() {
    return this.#quantity;
  }

  get customer() {
    return this.#customer;
  }
}

const reading = new Customer({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

export function acquireReading() {
  return reading;
}
