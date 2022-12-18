// export class Order {
//   constructor(data) {
//     this.priority = data.priority;
//   }
// }

// const orders = [
//   new Order({ priority: 'normal' }),
//   new Order({ priority: 'high' }),
//   new Order({ priority: 'rush' }),
// ];

// const highPriorityCount = orders.filter(
//   (o) => 'high' === o.priority || 'rush' === o.priority
// ).length;

//Note:
//1. 문제가 무엇이냐? priority 를 filter 로 순회하는 콜백 함수가 노출되있음?
//2. 해결방법 : priority 를 별도로 만들거나 order 에 해당 콜백 함수를 넣어 둔다.
//3. 주의 : priority 를 많이 사용하지 않는다면 오버 한 것임 order 에 함수 따로 빼 둔 것으로 충분

export class Order {
  constructor(public priority: Priority) {}

  isHigherThan(other: Priority) {
    this.priority.higherThan(other);
  }
}

class Priority {
  static LOW = new Priority('low', 0);
  static NORMAL = new Priority('normal', 1);
  static HIGH = new Priority('high', 2);
  static RUSH = new Priority('rush', 3);
  private constructor(private name: string, private index: number) {}

  equals(priority: Priority) {
    return this.index === priority.index;
  }

  higherThan(priority: Priority) {
    return this.index > priority.index;
  }

  lowerThan(priority: Priority) {
    return this.index < priority.index;
  }
}

const orders = [
  new Order(Priority.LOW),
  new Order(Priority.HIGH),
  new Order(Priority.RUSH),
];

const count = orders.filter((o) => o.isHigherThan(Priority.LOW)).length;
console.log(count);
