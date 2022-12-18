class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }

  get department() {
    return this.#department;
  }

  get manager() {
    return this.department.manager;
  }

  get chargetCode() {
    return this.department.chargeCode;
  }

  set department(arg) {
    this.#department = arg;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person('Tom', new Department('aManager', '999'));
console.log(person.name);

//Note:아래처럼 한뎁스 더 타는것은 안좋다 별도의 department 의 필요한 기능을 가져오는 메서드를 또 만들자
//Note:그런데 단순히 이렇게 중개자 역할(그냥 게터세터 건너서 주는 것 보다는 그냥, 한 클래스로 합치는게 더 나을 수도 있다.)
console.log(person.manager);
console.log(person.chargeCode);
