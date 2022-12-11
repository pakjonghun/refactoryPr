import fs from "fs";

run(process.argv);

//read command
function run(command) {
  const parsedCommand = readCommand(command);
  printOrders(parsedCommand);
}

function readCommand(command) {
  if (!command[2]) {
    throw new Error("파일 이름을 입력하세요");
  }

  const fileName = `./${command[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error("파일이 존재하지 않습니다");
  }

  return { fileName, isReadyOnly: process.argv.includes("-r") };
}

function printOrders({ fileName, isReadyOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const filtered = isReadyOnly //
    ? orders.filter((order) => order.status === "ready")
    : orders;

  console.log(filtered.length);
}

//print orders
