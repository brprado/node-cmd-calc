let calc = {
  mult: (a, b) => {
    return a * b;
  },
  sum: (a, b) => {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
  div: (a, b) => {
    return a / b;
  },
  pow: (a, b) => {
    return Math.pow(a, b);
  },
  pct: (a, b) => {
    return (a / 100) * b;
  },
  sin: (a) => {
    return Math.sin(a);
  },
  cos: (a) => {
    return Math.cos(a);
  },
  log: (a, b) => {
    return Math.log(a) / Math.log(b);
  },
  tan: (a, b) => {
    return Math.tan(a);
  },
  fat: (a) => {
    var fatorial = a;
    var resultado = fatorial;
    for (var i = 1; i < fatorial; i++) {
      resultado *= i;
    }
    return resultado;
  },
};
module.exports = calc;
