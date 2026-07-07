import { Cliente} from "../models/cliente";
import { Tipo_cliente } from "../models/tipoDeCliente ";

export const clientes: Cliente[] = [

    {
        id_cliente: 1,
        dpi_cliente: 123456789,
        nombre_cliente: "Juan",
        apellido_cliente: "Pérez",
        email_cliente: "juanperez@gmail.com",
        telefono_cliente: "5555-5698",
        tipo_cliente: Tipo_cliente.NORMAL
    },

    {
        id_cliente: 2,
        dpi_cliente: 987654321,
        nombre_cliente: "María",
        apellido_cliente: "Gómez",
        email_cliente: "mariaG@gmail.com",
        telefono_cliente: "3698-1254",
        tipo_cliente: Tipo_cliente.PREMIUM
    }
]