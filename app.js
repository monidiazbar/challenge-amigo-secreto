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

  function sortearAmigo() {
      // 1. Validar que haya amigos disponibles
        if (amigos.length === 0) {
            alert("No hay amigos para sortear");
            return;
        }

      // 2. Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

			// 3. Obtener el nombre sorteado
      	let amigoSorteado = amigos[indiceAleatorio];

      // 4. Mostrar el resultado
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
  }