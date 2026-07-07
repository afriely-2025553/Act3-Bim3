import { Producto } from "../models/producto";
import { categoria_producto } from "../models/categoriaProducto";

export const productos: Producto[] = [
    {
        id_producto: 1,
        nombre_producto: "Camiseta",
        descripcion_producto: "Camiseta de algodón de alta calidad",
        precio_producto: 19.99,
        categoria_producto: "Ropa"
    },

    {
        id_producto: 2,
        nombre_producto: "Balón de fútbol",
        descripcion_producto: "Balón de fútbol de alta calidad",
        precio_producto: 29.99,
        categoria_producto: "Deportes"
    },

    {
        id_producto: 3,
        nombre_producto: "Chocolate",
        descripcion_producto: "Chocolate oscuro con 70% de cacao",
        precio_producto: 4.99,
        categoria_producto: "Alimentos"
    }
]