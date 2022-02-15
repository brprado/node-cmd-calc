# node-cmd-calc
Calculadora para cmd usando NodeJS

# Como utilizar

## Passe o arquivo com o node normalmente:
`node script.js`

## passe como 3° argumento a operação desejada
sum, mult, sub, div, pow(potencia), pct(porcentagem), sin, cos, log, tan, fat(fatorial)
`node script.js sum`

## Passe como 4° argumento os numeros a serem operados
`node script log 100 10`
- sum(num,num)
- mult(num,num)
- sub(num, num)
- div(num, divisor)
- pow(num, pot)
- pct(pct, num)
- sin(num) 
- cos(num) 
- log(num,base)
- tan(num)
- fat(num)

## Exemplo no cmder
`λ node script fat 10`
output: `3628800`

`λ node script pct 10 100`
output: `10`
