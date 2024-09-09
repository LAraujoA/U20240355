function verificaNumero(número) {
    return new Promise((resolve, reject) => {
        if (número === 5) {
            resolve("El número es 5");
        } else {
            reject("El número no es 5");
        }
    });
}

// Ejemplo de uso
verificaNumero(5)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
