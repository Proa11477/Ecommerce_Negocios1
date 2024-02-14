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
    productos.forEach(function (producto) {
        var fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.categoria}</td>
            <td><img src="${producto.imagen}" alt="Imagen del producto"></td>
        `;
        productosBody.appendChild(fila);
    });
}