//너무 긴 함수
//유지보수, 가독성, 재사용성 에 문제가 있음

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};

export function printOwing(invoice) {
  printHeader();
  printDetail(calculateDueDate(invoice), calculateOutStanding(invoice));
}

function calculateOutStanding(invoice) {
  return invoice.orders.reduce(
    (totalAmount, { amount }) => totalAmount + amount,
    0
  );
}

function calculateDueDate(data) {
  const result = Object.assign({}, data);
  const today = new Date();
  result.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  return result;
}

function printDetail(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function printHeader() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

printOwing(invoice);
