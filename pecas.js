let pesoPecas = 101

if (pesoPecas > 100) {
  console.log('Acesso Liberado!')
} else console.log('Acesso Negado!')

let numeroPecas = 11

if (numeroPecas < 10) {
  console.log('Ainda há espaço, acesso liberado!')
} else console.log('Não há mais espaço, acesso negado!')

let nomePeca = 'Disco de Freio'

console.log('o comprimento do nome da peça:', nomePeca.length, 'caracteres')

if (nomePeca.length < 3) {
  console.log('Não é possível cadastrar! Nome muito curto!')
} else console.log('Podemos cadastrar! Nome adequado!')
