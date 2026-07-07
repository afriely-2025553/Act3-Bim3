import { Cliente } from "../models/cliente";
import { Tipo_cliente } from "../models/tipoDeCliente ";
import { clientes } from "../data/cliente";

export function agregarCliente(
    id_cliente: number,
    dpi_cliente: number,
    nombre_cliente: string,
    apellido_cliente: string,
    email_cliente: string,
    telefono_cliente: string,
    tipo: number
): void {

    let tipoCliente = Tipo_cliente.NORMAL;

    if (tipo === 2) {
        tipoCliente = Tipo_cliente.PREMIUM;
    }

    clientes.push({
        id_cliente,
        dpi_cliente,
        nombre_cliente,
        apellido_cliente,
        email_cliente,
        telefono_cliente,
        tipo_cliente: tipoCliente
    });

    console.log("Cliente agregado correctamente");
}

    export function listarclientes(): Cliente[] {
        return clientes;
    }   


    export function eliminarCliente(id_cliente: number): void {
        const index = clientes.findIndex(cliente => cliente.id_cliente === id_cliente);
        if (index !== -1) {
            clientes.splice(index, 1);
        }
    }

    export function actualizarCliente(id_cliente: number, clienteActualizado: Cliente): void {
        const index = clientes.findIndex(cliente => cliente.id_cliente === id_cliente);
        if (index !== -1) {
            clientes[index] = clienteActualizado;
        }
    }