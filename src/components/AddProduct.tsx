import React, { useState, ChangeEvent, FormEvent } from "react";
import { createProduct } from "../services/api";

// Tipagem para os dados do produto
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Tipagem para o produto que será adicionado (sem o id)
type ProductInput = Omit<Product, 'id'>;

const AddProduct: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Atualizado para incluir description, category e image
      const newProduct: ProductInput = { 
        title, 
        price: parseFloat(price), 
        description, 
        category, 
        image 
      };
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

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
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
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={handleCategoryChange}
      />
      <input
        type="text"
        placeholder="Imagem (URL)"
        value={image}
        onChange={handleImageChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddProduct;
