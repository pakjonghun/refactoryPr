import { createData } from "./createData";
import { Invoice, ObjectData, Player } from "./types";
import { getData, kwr } from "./utils";

(async function () {
  const invoices = await getData("/public/data/invoices");
  const plays = await getData("/public/data/play");
  const result = statement(invoices, plays);
  const root = document.getElementById("root")!;
  root.innerText = result;
})();

function statement(invoice: Invoice, plays: Player) {
  const data = createData(invoice, plays);
  return renderPlainText(data);
}

function renderPlainText(data: ObjectData) {
  let result = `청구내역(고객명 : ${data.customer})\n`;

  for (let perf of data.performances) {
    result += `${perf.name}: ${kwr(perf.amount)} ${perf.audience}석\n`;
  }

  result += `총액 : ${kwr(data.totalAmount)}\n`;
  result += `적립 포인트 : ${data.totalVolumeCredits}점\n`;
  return result;
}
