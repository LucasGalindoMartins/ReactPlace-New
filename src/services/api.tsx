import axios, { AxiosResponse } from "axios";

// Configurando a URL base da API
const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default api;

// Tipagem para os produtos
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Obter todos os produtos
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get("/products");
  return response.data;  // Certifique-se de que o retorno seja um array de produtos
};

// Obter detalhes de um produto
export const getProductById = async (id: number): Promise<Product> => {
  const response: AxiosResponse<Product> = await api.get(`/products/${id}`);
  return response.data;
};

// Criar um novo produto
export const createProduct = async (productData: Omit<Product, 'id'>): Promise<Product> => {
  const response: AxiosResponse<Product> = await api.post("/products", productData);
  return response.data;
};

// Atualizar um produto
export const updateProduct = async (id: number, updatedData: Partial<Product>): Promise<Product> => {
  const response: AxiosResponse<Product> = await api.put(`/products/${id}`, updatedData);
  return response.data;
};

// Deletar um produto
export const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`);
};
