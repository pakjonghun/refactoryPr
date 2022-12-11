export function kwr(aNumber: number) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KWR",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

export async function getData(fileName: string) {
  return fetch(`${fileName}.json`).then((res) => res.json());
}
