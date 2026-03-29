let cantidad = 0; // variable para almacenar la cantidad seleccionada
const precio = 400000; // variable para almacenar el precio del producto

const precioSpan = document.querySelector(".precio-inicial"); // selecciona el elemento del precio inicial
precioSpan.innerHTML = 40000 // actualiza el precio inicial en el HTML como texto legible

const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

function actualizarTotal(){ // funcion para actualizar el total a pagar
    cantidadSpan.innerHTML = cantidad; //actualiza la cantidad en el HTML
    const total = cantidad * precio; // calcula el total multiplicando cantidad por precio
    valorTotalSpan.innerHTML = total;  // actualiza el total a pagar en el HTML
}

document.querySelector("#button-mas").addEventListener("click", () => { // agrega un evento de click al boton de sumar
  cantidad += 1; // incrementa la cantidad en 1
  actualizarTotal(); // llama a la funcion para actualizar el total a pagar
});

document.querySelector("#button-menos").addEventListener("click", () => {
  cantidad = Math.max(0, cantidad - 1); //reduce la cantidad en 1 pero no permite que sea menor a 0
  actualizarTotal(); // llama a la funcion para actualizar el total a pagar
});

// inicial
actualizarTotal(); // llama a la funcion para actualizar el total a pagar al cargar la pagina