let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra) => {
    let palabraInvertida = palabra.split('').reverse().join('')
    if (palabra === palabraInvertida) {
        console.log("La palabra es un palíndromo.")
    } else {
        console.log("La palabra no es un palíndromo.")
    }
    process.exit()
})
