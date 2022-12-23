//의미있는 변수를 선언한다 사람이 알아보기 쉬운 코드가 좋은 코드다
//웬만하면 const 를 사용하고,
//좁은 블록에서 let 을 꼭 사용해야 할 때만 사용한다.

// 예제 1
const perimeter = (temp = 2 * (height + width));
console.log(temp);
const area = height * width;
console.log(temp);

// 예제 2
function distanceTravelled(scenario, time) {
  let result;
  const acceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * acceleration * primaryTime * primaryTime; // 전파된 거리
  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = acceleration * scenario.delay;
    const secondAccelleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondAccelleration * secondaryTime * secondaryTime;
  }
}

// 예제 3
function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result = inputValue - 2;
  if (quantity > 100) result = inputValue - 1;
  return result;
}
