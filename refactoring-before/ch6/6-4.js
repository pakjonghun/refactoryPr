//불필요 한데? 직관에 의존해야 하지만 경험이 쌓이면 보인다.!

export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}
