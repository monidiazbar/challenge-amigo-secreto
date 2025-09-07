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
