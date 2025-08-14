// challenge-amigo-secreto_esp-main/app.js

let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
// Obtener el valor del campo de entrada y eliminar espacios en blanco al inicio y al final
  let nombreAmigo = document.getElementById("amigo").value;
  
  // Validar si el campo está vacío
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
 
  // Validar si es un número
  if (/^\d+$/.test(nombreAmigo.trim())) {
    alert("Por favor, no introduzca un número. Ingrese un nombre.");
    return;
  }
  
  // Validar si el nombre ya existe
  if (amigos.includes(nombreAmigo)) {
    alert("Este nombre ya está en la lista. Por favor, ingrese un nombre diferente.");
    return;
  }     

  // Agregar el nombre a la lista de amigos
  amigos.push(nombreAmigo);
  
  actualizarListaAmigos(amigos);
  
  // Limpiar el campo de entrada
  document.getElementById("amigo").value = "";
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos(amigos) {
  // Obtener el elemento de la lista en el DOM
  let lista = document.getElementById('listaAmigos');
  
  lista.innerHTML = "";
  
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {

  // Validar si hay amigos en la lista
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }
  // Validar si hay al menos dos amigos para hacer un sorteo
  if (amigos.length < 2) {
    alert("Debe haber al menos dos amigos para realizar el sorteo.");
    return;
  }
  // Generar un índice aleatorio para seleccionar un amigo
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  // Seleccionar el amigo sorteado usando el índice aleatorio
  let amigoSorteado = amigos[indiceAleatorio];
  // Eliminar el amigo sorteado de la lista para evitar que se repita
  amigos.splice(indiceAleatorio, 1);
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

// Función para limpiar la lista de amigos y el resultado del sorteo
function limpiarTodo() {
  amigos = [];
  actualizarListaAmigos(amigos);
  document.getElementById('resultado').innerHTML = "";
  document.getElementById("amigo").value = "";
}
