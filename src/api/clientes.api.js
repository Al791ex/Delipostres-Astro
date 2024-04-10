import axios from "axios"

const ClientesApi = axios.create({
    baseURL: "http://localhost:8000/pedidos/api/v1/clientes/" 
});

export const CrearCliente = (cliente) => ClientesApi.post("/", cliente) 
