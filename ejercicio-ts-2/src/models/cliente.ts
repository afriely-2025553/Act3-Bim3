import { Tipo_cliente } from "./tipoDeCliente ";

export interface Cliente {
    id_cliente: number;
    dpi_cliente: number;
    nombre_cliente: string;
    apellido_cliente: string;
    email_cliente: string;
    telefono_cliente: string;
    tipo_cliente: Tipo_cliente;
}