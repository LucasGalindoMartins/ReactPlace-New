import React, { useState, ChangeEvent } from "react";
import { updateProduct } from "../services/api";

// Definindo as tipagens para as props do componente
interface EditProductProps {
  productId: number;  // Alterado para number, pois a função updateProduct provavelmente espera um número
}

const EditProduct: React.FC<EditProductProps> = ({ productId }) => {
  // Tipagem dos estados
  const [title, setTitle] = useState<string>("");   // O estado 'title' é do tipo string
  const [price, setPrice] = useState<string>("");   // O estado 'price' é do tipo string

  // Função para manipular a atualização do produto
  const handleUpdate = async () => {
    try {
      const updatedData = { title, price: parseFloat(price) };
      await updateProduct(productId, updatedData);  // productId agora é um número
      alert("Produto atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  // Função para tratar as mudanças no campo de input
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <h2>Editar Produto</h2>
      <input
        type="text"
        placeholder="Novo nome do produto"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Novo preço"
        value={price}
        onChange={handlePriceChange}
      />
      <button onClick={handleUpdate}>Atualizar</button>
    </div>
  );
};

export default EditProduct;
