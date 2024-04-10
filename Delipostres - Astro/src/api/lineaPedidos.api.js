import axios from "axios"

const LineaPedidosApi = axios.create({
    baseURL: "http://localhost:8000/pedidos/api/v1/lineapedidos/"
});

export const AgregarProductoPedido = (productopedido) => LineaPedidosApi.post("/", productopedido);