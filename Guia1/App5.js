let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)
rl.question('Ingrese una frase: ', (frase) => {
    rl.question('Que palabra desea reemplazar: ', (palabraReemplazar) => {
        rl.question('Ingrese la nueva palabra: ', (nuevaPalabra) => {
            let nuevaFrase = frase.replace(new RegExp(palabraReemplazar, 'g'), nuevaPalabra);
            console.log(`La nueva frase es: ${nuevaFrase}`);
            process.exit();
        })
    })
})
