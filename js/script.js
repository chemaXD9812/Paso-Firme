
// =====================================
// ZAPATERIA PASO FIRME
// SISTEMA DE FILTROS Y CARRITO
// =====================================


// 1. BUSCAR LOS ELEMENTOS HTML

const botonesFiltro = document.querySelectorAll(
    ".filtros button"
);

const productos = document.querySelectorAll(
    ".producto"
);

const botonesAgregar = document.querySelectorAll(
    ".producto button"
);

const contador = document.getElementById(
    "contador-carrito"
);


// 2. CONTADOR DEL CARRITO

let cantidadCarrito = 0;


// 3. AGREGAR PRODUCTOS AL CARRITO

botonesAgregar.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Sumar un producto
        cantidadCarrito++;

        // Actualizar el contador
        contador.textContent = cantidadCarrito;

        // Mostrar confirmación
        alert("¡Producto agregado correctamente!");

    });

});


// 4. FILTRAR LOS PRODUCTOS

botonesFiltro.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Obtener el filtro seleccionado
        const filtro = boton.dataset.filtro;

        // Revisar cada producto
        productos.forEach(function(producto) {

            const categoria = producto.dataset.categoria;

            // Mostrar todos
            if (filtro === "todos") {

                producto.hidden = false;

            }

            // Mostrar solamente dama
            else if (filtro === "dama") {

                producto.hidden = categoria !== "dama";

            }

            // Mostrar solamente caballero
            else if (filtro === "caballero") {

                producto.hidden = categoria !== "caballero";

            }

        });

    });

});


// 5. MENSAJE DE COMPROBACIÓN

console.log("PASO FIRME funcionando correctamente");
console.log("Productos encontrados:", productos.length);
console.log("Botones de filtros:", botonesFiltro.length);
console.log("Botones del carrito:", botonesAgregar.length);
