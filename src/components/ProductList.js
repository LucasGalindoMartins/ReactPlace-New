import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";  // Função que busca os produtos
import ProductItem from "./ProductItem";  // Exibe detalhes de cada produto

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();  // Faz o GET para buscar os produtos
        setProducts(data);  // Atualiza o estado com os produtos recebidos
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-name">{product.title}</div>
            <div className="product-price">${product.price}</div>
            <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
