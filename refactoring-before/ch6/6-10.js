import _ from "lodash";

const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

//얕은복사만 이루어 지므로 불안정하다. 그래서 딥 클론 한다.
//클레스는 실시간 바뀌는 변수를 사용 할 수 있지만.
//변환함수는 맨 처음 초기 값으로 작업 한다.

export function acquireReading(origin) {
  return _.cloneDeep(origin);
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
