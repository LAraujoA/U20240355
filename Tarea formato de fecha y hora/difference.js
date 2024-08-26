let date1 = new Date (2006, 0, 28);
let date2 = new Date (2005, 9, 15);

let diferenciaTiempo = date1.getTime() - date2.getTime();
let diferenciaDias = diferenciaTiempo / (1000 * 3600 * 24);

console.log("la diferencia que hay entre el 15 de Octubre del 2005 y el 28 de enero del 2006 es de " + diferenciaDias + " dias"); 