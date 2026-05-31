let precio = '1000';
let descuento = '20';

let calculoDescuento = precio * descuento / 100;
let montoFinal = precio - calculoDescuento;

console.log('Precio sin descuento es $' + precio);
console.log('El descuento es ' + descuento + '%');
console.log('Precio con descuento es $' + montoFinal);