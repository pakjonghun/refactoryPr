//너무 구체적일 경우 굳이 나눌 필요가 없을 때도 있다.

// 예제 1
export function rating(driver) {
  return dvr.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}
