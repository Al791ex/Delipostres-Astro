import axios from "axios"

const ProductosApi = axios.create({
    baseURL: "http://localhost:8000/pedidos/api/v1/productos/"
});

export const ObtenerProductos = () => productosApi.get("/");
