import CalculatorBase from "./BaseCalculator";

export default class Comedy extends CalculatorBase {
  get volumeCreditFor() {
    return Math.max(this.performance.audience - 30, 0);
  }

  get amountFor() {
    return 10000 + 500 * (this.performance.audience - 30);
  }
}
