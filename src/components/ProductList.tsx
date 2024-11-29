import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";  // Função para buscar os produtos
import ProductItem from "./ProductItem";  // Componente para exibir detalhes do produto

// Definição das tipagens para os produtos
interface Product {
  id: number;      // Garantir que o ID seja do tipo number, caso a API retorne um número
  title: string;
  price: number;
  image: string;   // Supondo que a imagem seja uma URL de string
}

interface ProductListProps {
  onAddToCart: (product: Product) => void;  // Função para adicionar ao carrinho
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);  // Estado para armazenar os produtos

  // Função para buscar os produtos da API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();  // Chama a função que faz o GET na API
        setProducts(data);  // Atualiza o estado com os produtos recebidos
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);  // Executa uma vez quando o componente for montado

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <ProductItem 
              product={product} 
              onAddToCart={onAddToCart}  // Passa a função para adicionar ao carrinho
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
