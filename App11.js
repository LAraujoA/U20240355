let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) => {
    let palabras = frase.split(' ');
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    console.log(`La frase capitalizada es: ${palabras.join(' ')}`)
    process.exit()
})
