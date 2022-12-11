import { ObjectData, PlayerItem } from "../types";

export interface Calculator {
  play: PlayerItem;
  performance: ObjectData;
  get volumeCreditFor(): number;
  get amountFor(): number;
}
