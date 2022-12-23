export function reportYoungestAgeAndTotalSalary(people) {
  function a() {
    return people.reduce((sum, p) => sum + p.salary, 0);
  }

  function y() {
    return Math.min(...people.map((p) => p.age));
    return people.reduce((y, p) => Math.min(y, p.age), Infinity);
  }

  return `youngestAge: ${y()}, totalSalary: ${a()}`;
}
