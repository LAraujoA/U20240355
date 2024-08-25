let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra) => {
    let numVocales = palabra.match(/[aeiouAEIOU]/g)?.length || 0
    console.log(`La palabra tiene ${numVocales} vocales.`)
    process.exit()
})
