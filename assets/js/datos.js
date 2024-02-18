        // Array para almacenar los datos de productos
        var productos = [];


        // Función para manejar el evento de envío del formulario
        document.getElementById('regForm').addEventListener('submit', function (event) {

        //debug y pruebas
        console.log("Se activa despues de presionar register");
        //continua normal

        event.preventDefault(); // Evitar que la pag recargue
        guardarCambios(); // Llama a la función para guardar los cambios
        document.getElementById('submitButton').value = 'Register'; // Cambiar el texto del botón a "Register" (ligado a evento modificar, no cambiar por favor)
        });

        // Función para actualizar la tabla de productos
        function actualizarTablaProductos() {
            var productosBody = document.getElementById('productosBody');
            productosBody.innerHTML = ''; // Limpiar el contenido actual de la tabla
            console.log("funcion actualizar tabla");
            // Recorrer el array de productos y agregar filas a la tabla
            productos.forEach(function (producto, index) {

                //solo para debug y pruebas
                console.log("producto:",producto.nombre);
                console.log("producto:",producto.descripcion);
                console.log("producto:",producto.categoria);
                console.log("producto:",producto.imagen);
                console.log("producto:",index);

                //continua funcion normal con el recorrido y agregacion de filas
                var fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${producto.nombre}</td>
                    <td>${producto.descripcion}</td>
                    <td>${producto.categoria}</td>
                    <td><img src="${producto.imagen}" alt="Imagen del producto"></td>
                    <td>
                        <button class="btn-1" onclick="eliminarProducto(${index})"><img src="borrar.png" style="width: 25px; height: 25px;"></button>
                        <button class="btn-1" onclick="editarProducto(${index})"><img src="editar.png" style="width: 25px; height: 25px;"></button>
                    </td>
                `;
                productosBody.appendChild(fila);
            });
        }

        // Función para eliminar un producto del array y actualizar la tabla
        function eliminarProducto(index) {
            productos.splice(index, 1);
            actualizarTablaProductos(); // Actualizar la tabla de productos
        }


        // Función editar producto 
        function editarProducto(index) {
            var producto = productos[index]; //toma el producto a editar
            // Llena el formulario con los datos del producto para que el usuario pueda modificarlos
            document.getElementById('producto').value = producto.nombre;
            document.getElementById('descripcion').value = producto.descripcion;
            document.getElementById('categoria').value = producto.categoria;
            document.getElementById('imagen').value = producto.imagen;

            document.getElementById('submitButton').value = 'Guardar';//cambia el nombre del boton register, solo para evitar confusiones..
            
            // Almacena el índice del producto que se está editando
            document.getElementById('currentEditedIndex').value = index;
        }

        // Función para guardar los cambios realizados en el formulario de edición, tambien guarda los datos ingresados de un nuevo formulario
        function guardarCambios() {
            
            //Toma el index actual, puede ser confuso pero esto ayuda a que un producto nuevo sea agregado y uno que ya existe pueda se modificado, no genera problemas
            var index = document.getElementById('currentEditedIndex').value;

            //  Actualiza los datos del producto en el array con los valores del formulario
            if (index !== '') {
                productos[index].nombre = document.getElementById('producto').value;
                productos[index].descripcion = document.getElementById('descripcion').value;
                productos[index].categoria = document.getElementById('categoria').value;
                productos[index].imagen = document.getElementById('imagen').value;

                // Limpia el formulario después de guardar los cambios
                document.getElementById('producto').value = '';
                document.getElementById('descripcion').value = '';
                document.getElementById('categoria').value = '';
                document.getElementById('imagen').value = '';

                // Limpia el campo de índice del producto en edición
                document.getElementById('currentEditedIndex').value = '';

                // Actualiza la tabla de productos
                actualizarTablaProductos();
            } else {
                // Si no se está editando un producto existente, agrega un nuevo producto
                // Se obtienen los valores del formulario
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
            }
        }

        //fin js, cualquier comentario en git