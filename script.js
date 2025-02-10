// Seleccionar el elemento con ID "titulo" y cambiar su texto
document.getElementById("titulo").textContent = "¡Manipulación del DOM!";

document.getElementById("titulo").style.fontSize = "48px";

// Seleccionar todos los elementos con la clase "parrafo" y cambiar su color a azul
document.querySelectorAll(".parrafo").forEach(parrafo => {
    parrafo.style.color = "blue";
});

// Seleccionar el primer párrafo y agregar un borde rojo de 2px sólido
document.querySelector(".parrafo").style.border = "2px solid red";

// Seleccionar el primer elemento <li> de la lista y cambiar su contenido
document.querySelector("#lista li").textContent = "Elemento Modificado";

// Crear un nuevo elemento <li> y agregarlo al final de la lista
const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 3";
document.getElementById("lista").appendChild(nuevoElemento);

// Crear un nuevo párrafo y agregarlo después del segundo párrafo
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo nuevo";
const parrafos = document.querySelectorAll(".parrafo");
parrafos[1].after(nuevoParrafo);

// Eliminar el segundo elemento <li> de la lista
const segundoElemento = document.querySelectorAll("#lista li")[1];
if (segundoElemento) {
    segundoElemento.remove();
}

// Seleccionar la lista y cambiar su estilo para mostrar los elementos en línea
document.getElementById("lista").style.listStyle = "none";
document.querySelectorAll("#lista li").forEach(li => {
    li.style.display = "inline-block";
    li.style.marginRight = "10px";
});

// Función para generar un color aleatorio
function getRandomColor() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Seleccionar el botón y agregar un evento de clic
const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
});