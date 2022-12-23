//FIXME:문제 없는 것 같아 보인다.

//NOTE: if(type.isPrimary) 가 메인 조건이므로 type 로 옮기는 것이 더 좋아보인다.
//이렇게 빼니 파입이 필요가 없어져서 어카운트 di 에서 빼버렸다.

export class Account {
  constructor() {
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === 'Premium';
  }

  overdraftCharge(daysOverdrawn) {
    if (!this.isPremium) {
      return this.daysOverdrawn * 1.75;
    }

    return daysOverdrawn <= 7
      ? 10
      : baseCharge + (this.daysOverdrawn - 7) * 0.85;
  }
}
