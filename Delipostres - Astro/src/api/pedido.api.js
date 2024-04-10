import axios from "axios"

const PedidosApi = axios.create({
    baseURL: "http://localhost:8000/pedidos/api/v1/pedidos/"
});

export const CrearPedido = (pedido) => {
    return pedidosApi.post("/", pedido);
};