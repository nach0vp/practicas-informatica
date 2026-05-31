let titulo = document.querySelector('h1');
let subtitulo = document.querySelector('h2');
let parrafos = document.querySelectorAll('p');
let lista = document.querySelector('ul');
let imagen = document.querySelector('img');

titulo.addEventListener('click', function(){
	titulo.style.color = 'red';
	titulo.style.backgroundColor = 'pink';
});

subtitulo.addEventListener('click', function(){
	subtitulo.style.color = 'red';
	subtitulo.style.backgroundColor = 'pink';
});

parrafos[0].addEventListener('click', function(){
	parrafos[0].style.color = 'red';
	parrafos[0].style.backgroundColor = 'pink';
});

parrafos[1].addEventListener('click', function(){
	parrafos[1].style.color = 'red';
	parrafos[1].style.backgroundColor = 'pink';
});

lista.addEventListener('click', function(){
	lista.style.color = 'red';
	lista.style.backgroundColor = 'pink';
});

imagen.addEventListener('click', function(){
	imagen.style.display = 'none';
	imagen.style.backgroundColor = 'pink';
});