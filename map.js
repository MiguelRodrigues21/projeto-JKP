//MAP = mapea o array / item - index (posição) - array completo
// ele coloca em um novo array

const number = [1,2,3,4,5,6,7]

const dobro = number.map((item) => {
    return item * 2
})
console.log(number)
console.log(dobro)