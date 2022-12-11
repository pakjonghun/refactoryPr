// class Product {
//   #basePrice;
//   #discountRate;
//   #discountThreshold;

//   constructor(data) {
//     this.#basePrice = data.basePrice;
//     this.#discountRate = data.discountRate;
//     this.#discountThreshold = data.discountThreshold;
//   }

//   discount(quantity) {
//     return (
//       Math.max(quantity - this.discountThreshold, 0) *
//       this.basePrice *
//       this.discountRate
//     );
//   }

//   get basePrice() {
//     return this.#basePrice;
//   }
//   get discountRate() {
//     return this.#discountRate;
//   }
//   get discountThreshold() {
//     return this.#discountThreshold;
//   }
// }

// class ShippingMethod {
//   #discountThreshold;
//   #feePerCase;
//   #discountedFee;
//   product;

//   constructor(data, product) {
//     this.product = product;
//     this.#discountThreshold = data.discountThreshold;
//     this.#feePerCase = data.feePerCase;
//     this.#discountedFee = data.discountedFee;
//   }

//   get shippingPerCase() {
//     return this.product.basePrice > this.discountThreshold
//       ? this.discountedFee
//       : this.feePerCase;
//   }

//   shippingCost(quantity) {
//     return quantity * this.shippingPerCase;
//   }

//   price(quantity) {
//     return (
//       this.product.basePrice -
//       this.product.discount(quantity) +
//       this.shippingCost(quantity)
//     );
//   }

//   get discountThreshold() {
//     return this.#discountThreshold;
//   }
//   get feePerCase() {
//     return this.#feePerCase;
//   }
//   get discountedFee() {
//     return this.#discountedFee;
//   }
// }

// // 사용 예:
// const product = new Product({
//   basePrice: 10,
//   discountRate: 0.1,
//   discountThreshold: 10,
// });

// const shippingMethod = new ShippingMethod(
//   {
//     discountThreshold: 20,
//     feePerCase: 5,
//     discountedFee: 3,
//   },
//   product
// );

// export function priceOrder(quantity, shippingMethod) {
//   const price = shippingMethod.price(quantity);
//   return price;
// }

// const price = priceOrder(5, shippingMethod);
// console.log(price);

class Order {
  #quantity;
  #product;
  #shippingMethod;
  constructor(quantity, product, shippingMethod) {
    this.#quantity = quantity;
    this.#product = product;
    this.#shippingMethod = shippingMethod;
  }

  get basePrice() {
    return this.#product.basePrice * this.#quantity;
  }

  get discount() {
    return (
      Math.max(this.#quantity - this.#product.discountThreshold, 0) *
      this.#product.basePrice *
      this.#product.discountRate
    );
  }
  get totalShipping() {
    const shippingPerCase =
      this.calculateBasePrice > this.#shippingMethod.discountThreshold
        ? this.#shippingMethod.discountedFee
        : this.#shippingMethod.feePerCase;
    return this.#quantity * shippingPerCase;
  }

  get totalPrice() {
    return this.basePrice - this.discount + this.totalShipping;
  }
}

export function priceOrder(product, quantity, shippingMethod) {
  //기본상품가격 계산
  const basePrice = calculateBasePrice(product, quantity);

  //상품 할인 계산
  const discount = calculateDiscount(product, quantity);

  //총 배단 금액 계산
  const shippingCost = calculateTotalShipping(
    basePrice,
    quantity,
    shippingMethod
  );

  //총 가격
  return basePrice - discount + shippingCost;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const order = new Order(5, product, shippingMethod);
console.log(order.totalPrice);

function calculateBasePrice(product, quantity) {
  return product.basePrice * quantity;
}

function calculateDiscount(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}
function calculateTotalShipping(basePrice, quantity, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  return quantity * shippingPerCase;
}
