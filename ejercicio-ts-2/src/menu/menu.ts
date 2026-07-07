import { rl } from "../utils/readline";
import { listarProductos, agregarProducto, eliminarProducto, actualizarProducto } from "../service/productoService";
import { listarclientes, agregarCliente, eliminarCliente, actualizarCliente } from "../service/clienteService";
import { Cliente } from "../models/cliente";
import { Producto } from "../models/producto";
import { Tipo_cliente } from "../models/tipoDeCliente ";
import { categoria_producto } from "../models/categoriaProducto";
import { calcularIVAporId } from "../service/productoService";

export function menu(): void {

    console.log("|-------------------------------|")
    console.log("|-------      MENU      --------|")
    console.log("|-------------------------------|")
    console.log("|-----1. agregar producto   ----|")
    console.log("|-----2. eliminar producto  ----|")
    console.log("|-----3. actualizar producto----|")
    console.log("|-----4. listar productos   ----|")
    console.log("|-----5. calcular IVA       ----|")
    console.log("|-----6. agregar cliente    ----|")
    console.log("|-----7. eliminar cliente   ----|")
    console.log("|-----8. actualizar cliente ----|")
    console.log("|-----9. listar clientes    ----|")
    console.log("|-----0. salir              ----|")
    console.log("|-------------------------------|")

    rl.question("Seleccione una opción: ", (opcion) => {

        switch(opcion){

   case "1":

    rl.question("ID: ", (id) => {

        rl.question("Nombre: ", (nombre) => {

            rl.question("Descripción: ", (descripcion) => {

                rl.question("Precio: ", (precio) => {

                    rl.question("Categoria (Ropa, Deportes, Alimentos): ", (categoria) => {

                        agregarProducto(
                            Number(id),
                            nombre,
                            descripcion,
                            Number(precio),
                            categoria
                        );

                        menu();
                    });

                });

            });

        });

    });

    break;
    case "2":
        rl.question("ID del producto a eliminar: ", (id) => {
            eliminarProducto(Number(id));
            menu();
        });
        break; 
    case "3":
        rl.question("ID del producto a actualizar: ", (id) => {
            rl.question("Nuevo nombre: ", (nombre) => {
                rl.question("Nueva descripción: ", (descripcion) => {
                    rl.question("Nuevo precio: ", (precio) => {
                        rl.question("Nueva categoría: ", (categoria) => {
                            actualizarProducto(
                                Number(id),
                                {
                                    id_producto: Number(id),
                                    nombre_producto: nombre,
                                    descripcion_producto: descripcion,
                                    precio_producto: Number(precio),
                                    categoria_producto: categoria as any
                                }
                            );
                            menu();
                        });
                    });
                });
            });
        });
        break;
    case "4":
        console.table(listarProductos());
        menu();
        break;
    case "5":
        rl.question("ID del producto para calcular IVA: ", (id) => {
            const iva = calcularIVAporId(Number(id));
            console.log(`IVA para el producto con ID ${id}: ${iva}`);
            menu();
        });
        break;

    case "6":
        rl.question("ID: ", (id) => {
            rl.question("DPI: ", (dpi) => {
                rl.question("Nombre: ", (nombre) => {
                    rl.question("Apellido: ", (apellido) => {
                        rl.question("Email: ", (email) => {
                            rl.question("Teléfono: ", (telefono) => {
                                rl.question("Tipo (1: Normal, 2: Premium): ", (tipo) => {
                                    agregarCliente(
                                        Number(id),
                                        Number(dpi),
                                        nombre,
                                        apellido,
                                        email,
                                        telefono,
                                        Number(tipo)
                                    );
                                    menu();
                                });
                            });
                        });
                    });
                });
            });
        });
        break;
    case "7":
        rl.question("ID del cliente a eliminar: ", (id) => {
            eliminarCliente(Number(id));
            menu();
        });
        break;
    case "8":
        rl.question("ID del cliente a actualizar: ", (id) => {
            rl.question("Nuevo nombre: ", (nombre) => {
                rl.question("Nuevo apellido: ", (apellido) => {
                    rl.question("Nuevo email: ", (email) => {
                        rl.question("Nuevo teléfono: ", (telefono) => {
                            rl.question("Nuevo tipo (1: Normal, 2: Premium): ", (tipo) => {
                                actualizarCliente(
                                    Number(id),
                                    {
                                        id_cliente: Number(id),
                                        dpi_cliente: Number(id),
                                        nombre_cliente: nombre,
                                        apellido_cliente: apellido,
                                        email_cliente: email,
                                        telefono_cliente: telefono,
                                        tipo_cliente: Number(tipo) as any
                                    }
                                );
                                menu();
                            });
                        });
                    });
                });
            });
        });
        break;

    case "9":
        console.table(listarclientes());
        menu();
        break;
    case "0":
        rl.close();
        break;

    default:
        console.log("Opción inválida");
        menu();
}

    });
}