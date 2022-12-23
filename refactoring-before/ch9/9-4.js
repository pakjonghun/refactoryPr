//원시타입 은 재할당 이 되지만 변경은 안된다.  불변성
//ref 타입은 재할당 도 되고 각 속성의 value 를 다른 value 로 바꿀 수도 있다.   가변성(위험)
//해결방법
//1. 가변성을 없애고(telephone 의 set 을 없애고), 뭔가 바뀌면 새로 telephone 을 만든다.
//2. collection 을 노출하지 않는다 toString 으로 변경해서 값으로 노출하거나, 일일히 원시값을 노출한다.
//    2-1. 세터가 없는 ref 는 노출해도 어처피 변경 못해서 괜찮다.

class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    this.#telephoneNumber = new TelephoneNumber(value, this.officeNumber);
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value) {
    this.#telephoneNumber = new TelephoneNumber(this.officeAreaCode, value);
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }
  // set areaCode(arg) {
  //   this.#areaCode = arg;
  // }

  get number() {
    return this.#number;
  }
  // set number(arg) {
  //   this.#number = arg;
  // }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
