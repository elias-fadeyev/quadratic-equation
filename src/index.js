module.exports = function solveEquation(equation) {
  // your implementation
  let argArray = equation.split(' ').join('').replace('x^2', '1@').replace('x', '1@').split('@');
  let a = parseInt(argArray[0]);
  let b = parseInt(argArray[1]);
  let c = parseInt(argArray[2]);

  const solutions = [];
  const sqrtDescriminant = Math.round(Math.sqrt(b * b - 4 * a * c));
  solutions.push((- b - sqrtDescriminant) / (2 * a));
  solutions.push((- b + sqrtDescriminant) / (2 * a));
  solutions.sort((a,b) => (a-b));
  return solutions;
}
