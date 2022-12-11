import { Calculator } from "./interfaces";
import { ObjectData, PlayerItem } from "../types";

export default abstract class CalculatorBase implements Calculator {
  play: PlayerItem;
  performance: ObjectData;
  constructor(aPerformance: ObjectData, play: PlayerItem) {
    this.performance = aPerformance;
    this.play = play;
  }
  abstract get volumeCreditFor(): number;
  abstract get amountFor(): number;
}
