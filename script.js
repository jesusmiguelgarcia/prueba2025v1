let nombre = "Dr. Garcia";
console.log(`Bienvenido ${nombre}`);

const listaItems = document.getElementById("listaItems");
const itemInput = document.getElementById("itemInput");

function agregarItem() {
    const nuevoItem = itemInput.value;
    console.log(nuevoItem);
    if (nuevoItem === "") {
        alert("Por favor ingrese un nombre de item válido.");
        return;
    }
    // Crear un nuevo elemento de lista

    const li = document.createElement("li");
    li.className = "item-elemento";
    const itemSpan = document.createElement("span");
    itemSpan.textContent = nuevoItem;
    li.appendChild(itemSpan);

    // Crear botón de eliminar
    const accionesDiv = document.createElement("div");
    accionesDiv.className = "acciones";

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => editarItem(li, itemSpan);
    accionesDiv.appendChild(btnEditar);

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Borrar";
    btnEliminar.onclick = () => eliminarItem(li);
    accionesDiv.appendChild(btnEliminar);
    li.appendChild(accionesDiv);
    listaItems.appendChild(li);

    // limpia cuadro de texto
    itemInput.value = "";
  
}

function eliminarItem(li) {
    listaItems.removeChild(li);
}

function editarItem(li, itemSpan) {
    const nuevoItem = prompt("Editar item:", itemSpan.textContent);
    itemSpan.textContent = nuevoItem;
}