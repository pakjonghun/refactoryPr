export class TrackingInformation {
  #shippingCompany;
  #trackingNumber;
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }

  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

//Fixme:별다른 getter setter 이므로 한번 더 depth 을 타야 해서 안좋음 이럴때는 합치는게 더 나을수도 있다.
export class Shipment {
  #trackingInformation;
  constructor(trackingInformation) {
    this.#trackingInformation = trackingInformation;
  }

  get trackingInfo() {
    return this.#trackingInformation.display;
  }

  get trackingInformation() {
    return this.#trackingInformation;
  }

  set trackingInformation(trackingInformation) {
    this.#trackingInformation = trackingInformation;
  }
}

const shipment = new Shipment(new TrackingInformation(999, 'Maersk'));
console.log(shipment.trackingInfo);

shipment.trackingInformation.shippingCompany = 'COSCO';
console.log(shipment.trackingInfo);
