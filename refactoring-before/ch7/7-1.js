const organization = { name: 'Acme Gooseberries', country: 'GB' };

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);

//NOTE:
//값을 하나씩 저장 해 두는것이 보기도 좋고, 일반적인 방법이다.
//객체로 관리 할 경우 불변성을 잘 지켜라. 혹
//분변성을
class Organization {
  constructor(name, country) {
    this.#name = name;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  get rawData() {
    return { name, country };
  }
}
