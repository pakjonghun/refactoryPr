class Office {
  #officeAreaCode;
  #officeNumber;
  constructor(areaCode, number) {
    this.#officeAreaCode = areaCode;
    this.#officeNumber = number;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }

  get officeAreaCode() {
    return this.#officeAreaCode;
  }

  set officeAreaCode(arg) {
    this.#officeAreaCode = arg;
  }

  get officeNumber() {
    return this.#officeNumber;
  }

  set officeNumber(arg) {
    this.#officeNumber = arg;
  }
}

class Person {
  #name;
  #personOffice;

  constructor(name, office) {
    this.#name = name;
    this.#personOffice = office;
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get office() {
    return this.#personOffice;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.office.officeAreaCode);
console.log(person.office.officeNumber);
console.log(person.office.telephoneNumber);
