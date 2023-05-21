//almacenar productos en pagina de carrito, mostrar cantidad de elementos en el icono carrito
var agregarCarritoButton = document.querySelectorAll('.agregar-carrito');
var contadorProdCarrito = 0;

agregarCarritoButton.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var producto = event.target.getAttribute('.data-producto');
        agregarAlCarrito(producto);
    });
});

function agregarAlCarrito(producto) {
    var itemsEnCarrito = localStorage.getItem('itemsEnCarrito');
    var itemsEnCarritoArray = new Array[];
    itemsEnCarritoArray = itemsEnCarrito ? JSON.parse(itemsEnCarrito) : [];
    itemsEnCarritoArray.push(producto);
    localStorage.setItem('itemsEnCarrito', JSON.stringify(itemsEnCarritoArray));
    contadorProdCarrito++;
    actualizarIconoCarrito(itemsEnCarritoArray.Length);
    alert('Producto ' + producto + ' agregado al carrito.');
}

function actualizarIconoCarrito(count) {
    var carritoIcono = document.getElementById('carrito-icon');
    carritoIcono.innerHTML = '<i class="fa-solid fa-cart-shopping fa-xl"></i> (' + count + ')';
