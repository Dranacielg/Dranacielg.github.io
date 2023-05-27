//Desplegar y ocultar carrito

const botonCarrito = document.querySelector(".contenedor-icono-carrito2")
const contenedorCarrito = document.querySelector(".contenedor-carrito")

botonCarrito.addEventListener("click", () => {
    contenedorCarrito.classList.toggle("esconder-carrito")
   
})

//Boton ir al carrito

function IrACarrito() {
    window.location.href = "carrito.html";
}


const infoCarrito = document.querySelector(".producto-en-carrito")
const rowProducto = document.querySelector(".row-producto")

//Lista de todos los productos

const listaProductos = document.querySelector(".productos")

let todosLosProductos = []

let valorTotal = document.querySelector(".total-pagar")
const contarProductos = document.querySelector("#contador-productos")
//Agrega un producto al carrito llamandolo desde el boton "agregar al carrito"
listaProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("agregar-carrito")) {
        const producto = e.target.parentElement;

        const infoProducto = {
            cantidad: 1,
            nombre: producto.querySelector("h2").textContent,
            precio: producto.querySelector("span").textContent,
        }

        const existe = todosLosProductos.some(producto => producto.nombre === infoProducto.nombre)
        //Actualiza la cantidad de productos y los muestra en el icocno carrito
        if (existe) {
            const productos = todosLosProductos.map(producto => {
                if (producto.nombre === infoProducto.nombre) {
                    producto.cantidad++;
                    return producto;
                }
                else {
                    return producto;
                }
            })

            todosLosProductos = [...productos]
        }
        else {
            todosLosProductos = [...todosLosProductos, infoProducto]
        }

        showHTML();
    }

});

//Borrar productos con el icono close
rowProducto.addEventListener('click', (e) => {
    if (e.target.classList.contains('cerrar-icono')) {
        const producto = e.target.parentElement
        const nombre = producto.querySelector('.nombre-prod-carrito').textContent;

        todosLosProductos = todosLosProductos.filter(item => item.nombre !== nombre);

    };

    showHTML();

    
})

const showHTML = () => {
    //Mensaje carrito vacio
    if (!todosLosProductos.length) {
        contenedorCarrito.innerHTML = `
          <p class="carrito-vacio"> El carrito esta vacio!</p>
        `
    }

    rowProducto.innerHTML = '';

    let totalPrecio = 0;
    let totalProductos = 0;

    todosLosProductos.forEach(_producto => {
        const contenedorProducto = document.createElement("div");
        contenedorProducto.classList.add("producto-en-carrito");
        //copia el producto en un nuevo div para mostrar en el carrito
        contenedorProducto.innerHTML = `
            <div class="info-prod-en-carrito">
               <span class="cantidad-prod-carrito">${_producto.cantidad}</span>
			   <span class="nombre-prod-carrito">${_producto.nombre}</span>
			   <span class="precio-prod-carrito">${_producto.precio}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="cerrar-icono">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;

        rowProducto.append(contenedorProducto);
        //Calcula el total a pagar del carrito
        totalPrecio = totalPrecio + parseInt(_producto.cantidad * _producto.precio.slice(1));
        totalProductos =  totalProductos + _producto.cantidad;

    });

    valorTotal.innerText = `$${totalPrecio}`;
    contarProductos.innerText = totalProductos;
}
