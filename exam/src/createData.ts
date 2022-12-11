import Comedy from "./calculator/Comedy";
import Horror from "./calculator/Horror";
import Tragedy from "./calculator/Tragedy";
import { Invoice, InvoicePlay, ObjectData, Player, PlayerItem } from "./types";

export function createData(invoice: Invoice, plays: Player) {
  const result = {} as ObjectData;
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount();
  result.totalVolumeCredits = totalVolumeCredits();

  return result;

  function totalAmount() {
    return result.performances.reduce(
      (result: number, perf: InvoicePlay) => result + perf.amount,
      0
    );
  }

  function totalVolumeCredits() {
    return (result.performances as InvoicePlay[]).reduce(
      (result, perf) => result + perf.volumeCredit,
      0
    );
  }

  function enrichPerformance(aPerformance: InvoicePlay) {
    const result = Object.assign({}, aPerformance) as ObjectData;
    const calculator = createCalculator(result, playFor(aPerformance));

    result.play = playFor(result);
    result.amount = calculator.amountFor;
    result.volumeCredit = calculator.volumeCreditFor;
    return result;

    function playFor(perf: ObjectData) {
      return plays[perf.playID];
    }
  }
}

function createCalculator(aPerformance: ObjectData, aPlay: PlayerItem) {
  switch (aPlay.type) {
    case "comedy":
      return new Comedy(aPerformance, aPlay);
    case "tragedy":
      return new Tragedy(aPerformance, aPlay);
    case "horror":
      return new Horror(aPerformance, aPlay);
    default:
      throw new Error("없는 타입의 공연 입니다.");
  }
}
