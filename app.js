// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos() {
  let nombreInput = document.getElementById("amigo");
	let nombre = nombreInput.value.trim(); // texto sin espacios extra

      if (nombre === "") {
          alert("Por favor inserte un nombre");
            } else {
                amigos.push(nombre);
                    console.log(amigos); // para verificar en consola
      }

      nombreInput.value = ""; // limpiar el input
}

function mostrarAmigos() {
    // 1. Obtener el elemento de la lista
      let lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
      lista.innerHTML = "";

    // 3. Iterar sobre el arreglo 'amigos'
      for (let i = 0; i < amigos.length; i++) {
    // 4. Crear un elemento <li> y agregarlo a la lista
      	lista.innerHTML += `<li>${amigos[i]}</li>`;
      }
  }
