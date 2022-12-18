import _ from 'lodash';

export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  set courses(courses) {
    this.#courses = courses;
  }

  //NOTE:
  //내보낼때는 복사를 해 줘서 내보내야 데이터가 안전해 진다
  get courses() {
    // return _.cloneDeep(this.#courses);
    // return this.#courses.slice();
    return [...this.#courses];
  }

  //NOTE:
  //데이터 쓰는 것도 제한을 둬야 한다.
  pushCurse(course) {
    this.#courses.push(course);
  }

  //NOTE:
  //삭제도 별도로 만들어서 제한을 둔다
  removeCourse(course) {
    const idx = this.#courses.indexOf(course);
    if (idx === -1) throw new Error('없는 코스 입니다.');
    this.#courses.splice(idx, 1);
  }
}

//NOTE: 컬렉션은 노출되면 안된다 바로 쓸수 있기 때문이다.
//만약 코스가 mutable 하다면 코드 전체가 문제가 된다.
//변수를 만들어서 그 변수를 입력 해버리면
//그 변수에 주소는 계속 살아 있어서 사용자가 언제든지 다시 값을 바꿀 수 있기 때문이다.
//이를 막기 위해 1번 방법을 사용 하는 것이 가장 바람직 하다고 생각한다.
//1. 변수가 가비지 컬렉트 되도록 함수내에서만 선언 할당한다.
//2. id 같은 원시값을 식별자로 사용해서 검색 삭제 추가 하도록 변경하고, 입력 받을때 주소를 한번더 바꾸는 과정을 거친다.

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
const course = new Course('리팩토링', true);
ellie.pushCurse(course);
console.log(ellie.courses.length);
ellie.removeCourse(course);
console.log(ellie.courses.length);
