export function acquireData(input) {
  //FIXME:사용안하면 아래처럼 주석 으로 남기지 않고 지운다!! 죽은코드 지우기!!(리팩토링 하므로 지우는게 정석))

  // const lines = input.split('\n');
  // let firstLine = true;
  // const result = [];
  // for (const line of lines) {
  //   if (firstLine) {
  //     firstLine = false;
  //     continue;
  //   }
  //   if (line.trim() === '') continue;
  //   const record = line.split(',');
  //   if (record[1].trim() === 'India') {
  //     result.push({ city: record[0].trim(), phone: record[2].trim() });
  //   }
  // }

  return input //
    .split('\n')
    .splice(1)
    .filter((l) => l !== '')
    .filter((l) => l.split(',')[1].trim() === 'India')
    .map((record) => ({
      city: record[0].trim(),
      phone: record[2].trim(),
    }));
}

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
const result = acquireData(input);
console.log(result);
