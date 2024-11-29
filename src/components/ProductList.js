import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";  // Função para buscar os produtos
import ProductItem from "./ProductItem";  // Componente para exibir detalhes do produto

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);  // Estado para armazenar os produtos

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
