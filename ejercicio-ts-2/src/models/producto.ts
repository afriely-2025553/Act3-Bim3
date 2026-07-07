import { categoria_producto } from "./categoriaProducto";

export interface Producto {
    id_producto: number;
    nombre_producto: string;
    descripcion_producto: string;
    precio_producto: number;
    categoria_producto: categoria_producto
}