import CalculatorBase from "./BaseCalculator";

export default class Tragedy extends CalculatorBase {
  get volumeCreditFor() {
    return Math.floor(this.performance.audience / 5);
  }

  get amountFor() {
    return 50000 + 1000 * (this.performance.audience - 10);
  }
}
