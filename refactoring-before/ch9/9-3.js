//함수에서 여러 변수를 건드는 것은 좋지 않다.
//왜냐하면 계산될 당시의 값이 무엇인지 헷갈려서 실수하기 쉽기 때문이다.
//질의함수로 빼서 getter 가 계산 한 값을 반환하도록 하는것이 낫다.

// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._price - this._discount;
  }
  set discount(value) {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return (
      this._production + this.adjustment[this.adjustment.length - 1].amount
    );
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
