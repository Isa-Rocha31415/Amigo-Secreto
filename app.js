// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// array que almacena los nombres ingresados 
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    console.log(amigos)
    if (nombre  === "") {
        alert("Por favor, inserte un nombre")
        return;
    } else {
        amigos.push(nombre)
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // limpiar la lista existente

        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li"); //creamos un li
            li.textContent = amigos[i]; // asignamos el nombre al amigo i
            lista.appendChild(li); //lo agregamos a la lista
        }
        limpiarCaja(); 
    }
}
function sortearAmigo(){
    if (amigos.length === 0){
        asignarTextoElemento("#resultado", "No tienes una lista de amigos :c");
        return;
    }
    let amigoSorteado = Math.floor(Math.random() *amigos.length);
    asignarTextoElemento("#resultado", "El amigo secreto es: " +  amigos[amigoSorteado]);

}