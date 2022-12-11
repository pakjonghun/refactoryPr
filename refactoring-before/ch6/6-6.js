//얕은복사를 하므로 2~3 dep 를 가면.. 망한다.
//완전 안전한 방법은 class 를 사용하는 방법이다.

let defaultOwner = { firstName: "마틴", lastName: "파울러" };

export function getDefaultOwner() {
  // return Object.assign({}, defaultOwner)
  // return { ...defaultOwner };
  const user = new DefaultOwner(defaultOwner);
  return user;
}

class DefaultOwner {
  #firstName;
  #lastName;

  constructor(data) {
    const { firstName, lastName } = data;
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }
}
