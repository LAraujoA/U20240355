let fecha = new Date(2012, 1, 20, 3, 12);

let options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
};

let formateoHora = fecha.toLocaleString('en-US', options);
console.log(formateoHora);