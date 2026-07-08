import { rl } from "../utils/readline";
import { listarProductos, agregarProducto, eliminarProducto, actualizarProducto } from "../service/productoService";
import { listarclientes, agregarCliente, eliminarCliente, actualizarCliente } from "../service/clienteService";
import { Cliente } from "../models/cliente";
import { Producto } from "../models/producto";
import { Tipo_cliente } from "../models/tipoDeCliente ";
import { categoria_producto } from "../models/categoriaProducto";
import { calcularIVAporId } from "../service/productoService";

export async function menu() {

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

    let opcion = await  rl.question("Seleccione una opción: ") ;

        switch(opcion){

   case "1":
    let id_producto = await rl.question("Ingrese el id del producto: ");
    let nombre_producto = await rl.question("Ingrese el nombre del producto: ");
    let descripcion_producto = await rl.question("Ingrese la descripción del producto: ");
    let precio_producto = Number(await rl.question("Ingrese el precio del producto: "));
    let categoria_producto = await rl.question("Ingrese la categoría del producto (Ropa, Deportes, Alimentos): ");

    await agregarProducto(
        Number(id_producto),
        nombre_producto,
        descripcion_producto,
        precio_producto,
        categoria_producto as categoria_producto
    );

    menu();
    break;
    case "2":
       let id_producto_eliminar = await rl.question("Ingrese el id del producto que desea eliminar: ");
        eliminarProducto(Number(id_producto_eliminar));
        menu();
        break;
    case "3":
        let id_producto_actualizar = await rl.question("Ingrese el id del producto a actualizar: ");
        let nombre_producto_actualizar = await rl.question("Ingrese el nuevo nombre del producto: ");
        let descripcion_producto_actualizar = await rl.question("Ingrese la nueva descripción del producto: ");
        let precio_producto_actualizar = Number(await rl.question("Ingrese el nuevo precio del producto: "));
        let categoria_producto_actualizar = await rl.question("Ingrese la nueva categoría del producto (Ropa, Deportes, Alimentos): ");

        let producto: Producto = {
            id_producto: Number(id_producto_actualizar),
            nombre_producto: nombre_producto_actualizar,
            descripcion_producto: descripcion_producto_actualizar,
            precio_producto: precio_producto_actualizar,
            categoria_producto: categoria_producto_actualizar as categoria_producto
        };
        await actualizarProducto(
            Number(id_producto_actualizar), producto
        );
        menu();
        break;
    case "4":
        console.table(listarProductos());
        menu();
        break;
    case "5":
        let id_producto_iva = await rl.question("Ingrese el id del producto para calcular el IVA: ");
        let iva = calcularIVAporId(Number(id_producto_iva));
        if (iva !== null) {
            console.log(`El IVA del producto con id ${id_producto_iva} es: ${iva}`);
        } else {
            console.log(`No se encontró un producto con id ${id_producto_iva}`);
        }
        menu();


    case "6":
       let id_cliente = await rl.question("Ingrese el id del cliente: ");
        let dpi_cliente = await rl.question("Ingrese el DPI del cliente: ");
        let nombre_cliente = await rl.question("Ingrese el nombre del cliente: ");
        let apellido_cliente = await rl.question("Ingrese el apellido del cliente: ");
        let email_cliente = await rl.question("Ingrese el email del cliente: ");
        let telefono_cliente = await rl.question("Ingrese el teléfono del cliente: ");
        let tipo_cliente = await rl.question("Ingrese el tipo de cliente (1: Normal, 2: Premium): ");

        await agregarCliente(
            Number(id_cliente),
            Number(dpi_cliente),
            nombre_cliente,
            apellido_cliente,
            email_cliente,
            telefono_cliente,
            Number(tipo_cliente)
        );


        menu();
        break;

    case "7":
        let id_cliente_eliminar = await rl.question("Ingrese el id del cliente que desea eliminar: ");
        eliminarCliente(Number(id_cliente_eliminar));
        menu();
        break;
    case "8":
        let id_cliente_actualizar = await rl.question("Ingrese el id del cliente a actualizar: ");
        let dpi_cliente_actualizar = await rl.question("Ingrese el nuevo DPI del cliente: ");
        let nombre_cliente_actualizar = await rl.question("Ingrese el nuevo nombre del cliente: ");
        let apellido_cliente_actualizar = await rl.question("Ingrese el nuevo apellido del cliente: ");
        let email_cliente_actualizar = await rl.question("Ingrese el nuevo email del cliente: ");
        let telefono_cliente_actualizar = await rl.question("Ingrese el nuevo teléfono del cliente: ");
        let tipo_cliente_actualizar = await rl.question("Ingrese el nuevo tipo de cliente (1: Normal, 2: Premium): ");

        let cliente: Cliente = {
            id_cliente: Number(id_cliente_actualizar),
            dpi_cliente: Number(dpi_cliente_actualizar),
            nombre_cliente: nombre_cliente_actualizar,
            apellido_cliente: apellido_cliente_actualizar,
            email_cliente: email_cliente_actualizar,
            telefono_cliente: telefono_cliente_actualizar,
            tipo_cliente: tipo_cliente_actualizar === "1" ? Tipo_cliente.NORMAL : Tipo_cliente.PREMIUM
        };

        await actualizarCliente(
            Number(id_cliente_actualizar), cliente
        );

        menu();
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

    };
