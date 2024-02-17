// Array para almacenar los datos de productos
var productos = [];

// Función para manejar el evento de envío del formulario
document.getElementById('regForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    var nombreProducto = document.getElementById('producto').value;
    var descripcionProducto = document.getElementById('descripcion').value;
    var categoriaProducto = document.getElementById('categoria').value;
    var imagenProducto = document.getElementById('imagen').value;

    // Crear un objeto con los datos del producto
    var nuevoProducto = {
        nombre: nombreProducto,
        descripcion: descripcionProducto,
        categoria: categoriaProducto,
        imagen: imagenProducto
    };

    // Agregar el nuevo producto al array
    productos.push(nuevoProducto);

    // Limpiar los campos del formulario
    document.getElementById('producto').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('imagen').value = '';

    // Actualizar la tabla de productos
    actualizarTablaProductos();
});

// Función para actualizar la tabla de productos
function actualizarTablaProductos() {
    var productosBody = document.getElementById('productosBody');
    productosBody.innerHTML = ''; // Limpiar el contenido actual de la tabla

    // Recorrer el array de productos y agregar filas a la tabla
    productos.forEach(function (producto, index) {
        var fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.categoria}</td>
            <td><img src="${producto.imagen}" alt="Imagen del producto"></td>
            <td><button class="btn-1" onclick="eliminarProducto(${index})"><img src="borrar.png" style="width: 25px; height: 25px;"></button></td>
        `;
        productosBody.appendChild(fila);
    });
}

// Función para eliminar un producto del array y actualizar la tabla
function eliminarProducto(index) {
    productos.splice(index, 1);
    actualizarTablaProductos(); // Actualizar la tabla de productos
}