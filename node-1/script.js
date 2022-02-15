//importing modules
let calc = require("./calc");

let slicedNodeArray = process.argv.slice(2); //index 0 e 1 excluidos (node + nome do arquivo)

let op = slicedNodeArray[0]; //primeiro arg: comando da operação
let a = parseInt(slicedNodeArray[1]); //segundo arg
let b = parseInt(slicedNodeArray[2]); //terceiro arg

if (op == "sum") {
  console.log(calc.sum(a, b));
} else if (op == "mult") {
  console.log(calc.mult(a, b));
} else if (op == "sub") {
  console.log(calc.sub(a, b));
} else if (op == "div") {
  console.log(calc.div(a, b));
} else if (op == "pow") {
  console.log(calc.pow(a, b));
} else if (op == "pct") {
  console.log(calc.pct(a, b));
} else if (op == "sin") {
  console.log(calc.sin(a));
} else if (op == "cos") {
  console.log(calc.cos(a));
} else if (op == "log") {
  console.log(calc.log(a, b));
} else if (op == "tan") {
  console.log(calc.tan(a));
} else if (op == "fat") {
  console.log(calc.fat(a));
}
