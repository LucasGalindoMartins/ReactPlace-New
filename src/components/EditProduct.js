import React, { useState } from "react";
import { updateProduct } from "../services/api";

const EditProduct = ({ productId }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleUpdate = async () => {
    try {
      const updatedData = { title, price: parseFloat(price) };
      await updateProduct(productId, updatedData);
      alert("Produto atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  return (
    <div>
      <h2>Editar Produto</h2>
      <input
        type="text"
        placeholder="Novo nome do produto"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Novo preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleUpdate}>Atualizar</button>
    </div>
  );
};

export default EditProduct;
