//관련된 것들과 묶은 매개변수를 만들고
//같이 사용되는 것들은 클래스도 만들어서 묶어서 관리한다.

export function readingsOutsideRange(
  station,
  { temperatureFloor, temperatureCeiling }
) {
  const numberRange = new NumberRange(temperatureCeiling, temperatureFloor);

  return station.readings.filter((r) => !numberRange.contain(r.temp));
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};
const operationPlan = {
  temperatureFloor: 51,
  temperatureCeiling: 53,
};

class NumberRange {
  #min;
  #max;

  constructor(max, min) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contain(number) {
    return this.#min <= number || number <= this.#max;
  }
}

const a = readingsOutsideRange(
  station,
  operationPlan.temperatureFloor,
  operationPlan.temperatureCeiling
);

console.log(a);
