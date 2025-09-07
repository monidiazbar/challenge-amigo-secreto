// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigos(nombre) {
	nombre = document.getElementById("amigo");
    if(nombre = "") {
        alert("Por favor inserte un nombre");
    } else {
        amigos.push(nombre);
    }
}