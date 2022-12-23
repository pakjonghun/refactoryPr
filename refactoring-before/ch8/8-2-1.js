//FIXME:사용하지 않는 멤버가 있어서 없애도 될 것 같아 보인다.

//NOTE: 이름을 보보서 클래스에 어룰리지 않는 멤버는 옮겨준다. 그 멤버에 관련된 메서드도 같이 옮겨주도 매개변수 등을 변경해 준다.

export class Customer {
  #name;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#contract = new CustomerContract(this.dateToday(), discountRate);
  }

  becomePreferred() {
    this.#contract.discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#contract.discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #discountRate;

  #startDate;
  constructor(startDate, discountRate) {
    this.#discountRate = discountRate;
    this.#startDate = startDate;
  }

  get discountRate() {
    return this.#discountRate;
  }

  set discountRate(discountRate) {
    [(this.#discountRate = discountRate)];
  }
}
