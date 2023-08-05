const sumar = (a, b) => a + b,
  restar = (a, b) => a - b,
  multiplicar = (a, b) => a * b,
  dividir = (a, b) => a / b,
  modulo = (a, b) => a % b,
  calculadora = {
    sumar,
    restar,
    multiplicar,
    dividir,
    modulo,
  };

module.exports = calculadora;
