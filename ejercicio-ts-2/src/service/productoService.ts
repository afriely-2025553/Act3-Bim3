import { Producto } from "../models/producto";
import { productos } from "../data/producto";

export function agregarProducto(
    id_producto: number,
    nombre_producto: string,
    descripcion_producto: string,
    precio_producto: number,
    categoria_producto: string
): void {

    productos.push({
        id_producto,
        nombre_producto,
        descripcion_producto,
        precio_producto,
        categoria_producto: categoria_producto as any
    });

    console.log("Producto agregado correctamente");
}
    export function listarProductos(): Producto[] {
        return productos;
    }   
    
   

    export function eliminarProducto(id_producto: number): void {
        const index = productos.findIndex(producto => producto.id_producto === id_producto);   
        if (index !== -1) {
            productos.splice(index, 1);
        }  
    }

    export function actualizarProducto(id_producto: number, productoActualizado: Producto): void {
        const index = productos.findIndex(producto => producto.id_producto === id_producto);
        if (index !== -1) {
            productos[index] = productoActualizado;
        }
    }

    export function calcularIVAporId(id_producto: number): number {
        const producto = productos.find(producto => producto.id_producto === id_producto);
        if (producto) {
            return producto.precio_producto * 0.12;
        }
        return 0;
    }

