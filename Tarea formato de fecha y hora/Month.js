let Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let fechaActual = new Date ();
let mesActual = Meses[fechaActual.getMonth()];
console.log("Estamos en el mes de: " + mesActual)