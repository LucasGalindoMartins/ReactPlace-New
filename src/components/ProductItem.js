import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-name">{product.title}</div>
      <div className="product-price">${product.price}</div>
      <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductItem;
