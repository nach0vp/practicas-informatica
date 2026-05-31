alert('Al aceptar, cambia todo');

let titulo = document.querySelector('h1');
titulo.innerText = "Todo cambio!";
titulo.style.backgroundColor = "blue";

let parrafo = document.querySelectorAll('p');
parrafo[0].innerText = "Este es el nuevo parrafo";
parrafo[1].innerText = "y este el 2do nuevo parrafo"
parrafo[0].style.color = "white";
parrafo[0].style.backgroundColor = "black";
parrafo[1].style.color = "white";
parrafo[1].style.backgroundColor = "black";