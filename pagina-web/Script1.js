const botonCarrito = document.querySelector(".contenedor-icono-carrito")
const contenedorCarrito = document.querySelector(".contenedor-carrito")

botonCarrito.addEventListener("click", () => {
    contenedorCarrito.classList.toggle("esconder-carrito")
   
})