//alert("Hola este es mi Javascript");

//let nombre = "jhomira"
//var nombre1 = "pedro"
//const nombre2 = "juan"

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONAR ELEMENTOS
//PRIMERA FORMA
//let titulo = document.querySelector(".header h1");
//console.log(titulo);
//titulo.innerHTML = "Cocabamba";

//***FORMA GENERAL
let contenidoTitulo = "Mi Web";
let titulo = document.querySelector(".header h1");
console.log(titulo);
titulo.innerHTML = contenidoTitulo;

//***CONDICIONALES */
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "nombre") {
   titulo.innerHTML = "otro";
} else {
   console.log ("no se cumple")
}

// FUNCIONES

let nombre = "Maria";
let departamento = "Piura";

let parrafo = document.querySelector("main .section1 .acerca-de-mí p");

function cambiarTexto(nombre, departamento) {
 let contenido = `Me llamo ${nombre}, soy de ${departamento} y le gusta viajar, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quos, incidunt nesciunt quas beatae quasi, maiores dolorum exercitationem molestias ad nam? Nihil, at hic sapiente consectetur incidunt voluptatibus inventore necessitatibus?`;
return contenido;
}

parrafo.innerText = cambiarTexto(nombre, departamento);


let menu_responsive = document.querySelector(".menu");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };

