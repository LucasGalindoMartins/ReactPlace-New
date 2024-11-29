import React from 'react';

// Definição das tipagens para os produtos
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductItemProps {
  product: Product;
  onAddToCart: (product: Product) => void; // Tipagem da função
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
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
