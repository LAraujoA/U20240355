let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('Ingrese una frase: ', (frase) => {
    let palabras = frase.trim().split(/\s+/);
    console.log(`La frase tiene ${palabras.length} palabras.`);
    process.exit();
});
