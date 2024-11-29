import React, { useState, ChangeEvent, FormEvent } from "react";
import { createProduct } from "../services/api";

// Tipagem para os dados do produto
interface Product {
  title: string;
  price: number;
}

const AddProduct: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const newProduct: Product = { title, price: parseFloat(price) };
      await createProduct(newProduct);
      alert("Produto adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Produto</h2>
      <input
        type="text"
        placeholder="Nome do produto"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={handlePriceChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddProduct;
