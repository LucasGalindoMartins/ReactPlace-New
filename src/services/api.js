import axios from "axios";

// Configurando a URL base da API
const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default api;

// Obter todos os produtos
export const getProducts = async () => {
    const response = await api.get("/products");
    return response.data;
  };
  
  // Obter detalhes de um produto
  export const getProductById = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  };
  
  // Criar um novo produto
  export const createProduct = async (productData) => {
    const response = await api.post("/products", productData);
    return response.data;
  };
  
  // Atualizar um produto
  export const updateProduct = async (id, updatedData) => {
    const response = await api.put(`/products/${id}`, updatedData);
    return response.data;
  };
  
  // Deletar um produto
  export const deleteProduct = async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  };
  