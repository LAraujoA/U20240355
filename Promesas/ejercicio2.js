function validarEdad(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Edad válida para acceder al contenido");
        } else {
            reject("Edad insuficiente para acceder al contenido");
        }
    });
}

// Ejemplo de uso
validarEdad(18)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
