export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  //아래와 같은 isPriority 같은 플래그가 있는 함수는 좋지 않다.
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
