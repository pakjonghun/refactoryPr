class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get basePrice() {
    return this.#quantity * this.#item.price;
  }

  get discountFactor() {
    this.basePrice > 1000 //
      ? (this.discountFactor -= 0.03)
      : 0.98;
  }

  get price() {
    //Note:필요 재활용 한다면 인라인 한 것을 다시 함수로 빼야 하는데 이것을 질의함수로 빼면된다
    // 위의 2개 getter 는 모두 price 에 있던 인라인 변수 들임.
    return this.basePrice * this.discountFactor;
  }
}
