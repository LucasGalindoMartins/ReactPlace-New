import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {/* Imagem do produto dentro do card */}
      <div className="product-image-container">
        <img
          src={product.image}  // Supondo que a imagem esteja no campo "image" da API
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ProductItem;
