function calcAmount(play, perf) {
  switch (play.type) {
    case 'tragedy':
      if (perf.audience > 30) {
        return 40000 + 1000 * (perf.audience - 30);
      }
      return 40000;
    case 'comedy': // 희극
      if (perf.audience > 20) {
        return 30000 + 10000 + 500 * (perf.audience - 20) + 300 * perf.audience;
      }
      return 30000 + 300 * perf.audience;
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }
}

function calcTotalAmount(plays, invoice) {
  return invoice.performances.reduce((acc, perf) => {
    return acc + calcAmount(plays[perf.playID], perf);
  }, 0);
}

function calcVolumeCredit(plays, invoice) {
  let result = 0;
  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    // 포인트를 적립한다.
    result += Math.max(perf.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === play.type) result += Math.floor(perf.audience / 5);
  }

  return result;
}

function calcResult(plays, invoice, format) {
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;
  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    const thisAmount = calcAmount(play, perf);

    // 청구 내역을 출력한다.
    result += `  ${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
  }

  return result;
}

export function statement(invoice, plays) {
  const totalAmount = calcTotalAmount(plays, invoice);
  const volumeCredits = calcVolumeCredit(plays, invoice);

  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  let result = calcResult(plays, invoice, format);

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
}

class Statement {
  constructor(invoice, plays) {
    this.plays = plays;
    this.invoice = invoice;
  }

  usd(number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(number);
  }

  calcAmount(play, perf) {
    switch (play.type) {
      case 'tragedy':
        if (perf.audience > 30) {
          return 40000 + 1000 * (perf.audience - 30);
        }
        return 40000;
      case 'comedy':
        if (perf.audience > 20) {
          return (
            30000 + 10000 + 500 * (perf.audience - 20) + 300 * perf.audience
          );
        }
        return 30000 + 300 * perf.audience;
      default:
        throw new Error(`알 수 없는 장르: ${play.type}`);
    }
  }

  play(playId) {
    return this.plays[playId];
  }

  get calcTotalAmount() {
    return this.invoice.performances.reduce((acc, perf) => {
      return acc + this.calcAmount(this.play(perf.playID), perf);
    }, 0);
  }

  get calcVolumeCredit() {
    return this.invoice.performances.reduce((acc, perf) => {
      return this.volumeCreditByPerf(perf) + acc;
    }, 0);
  }

  volumeCreditByPerf(perf) {
    let result = Math.max(perf.audience - 30, 0);
    if ('comedy' === this.play(perf.playID).type) {
      result += Math.floor(perf.audience / 5);
    }

    return result;
  }

  get calcResult() {
    let result = `청구 내역 (고객명: ${this.invoice.customer})\n`;
    for (let perf of this.invoice.performances) {
      result += `  ${this.play(perf.playID).name}: ${this.usd(
        this.calcAmount(this.play(perf.playID), perf) / 100
      )} (${perf.audience}석)\n`;
    }

    return result;
  }

  get statement() {
    let result = this.calcResult;
    result += `총액: ${this.usd(this.calcTotalAmount / 100)}\n`;
    result += `적립 포인트: ${this.calcVolumeCredit}점\n`;
    return result;
  }
}

// 사용예:
const playsJSON = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

const invoicesJSON = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  },
];

const result = new Statement(invoicesJSON[0], playsJSON).statement;
// const result = statement(invoicesJSON[0], playsJSON);
const expected =
  '청구 내역 (고객명: BigCo)\n' +
  '  Hamlet: $650.00 (55석)\n' +
  '  As You Like It: $580.00 (35석)\n' +
  '  Othello: $500.00 (40석)\n' +
  '총액: $1,730.00\n' +
  '적립 포인트: 47점\n';
console.log(result);
console.log(result === expected);
