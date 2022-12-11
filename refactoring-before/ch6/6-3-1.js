//주석이 문제
//변수를 추출해서 나누었으므로 주석은 필요 없음
//변수 이름은 간단하게 하는 것이 좋다.

export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비

  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - +discount + shipping;
}
