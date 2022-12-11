import CalculatorBase from "./BaseCalculator";

export default class Horror extends CalculatorBase {
  get volumeCreditFor() {
    return Math.max(this.performance.audience - 60, 0);
  }

  get amountFor() {
    return 10000 + 500 * (this.performance.audience - 60);
  }
}
