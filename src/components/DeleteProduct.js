import React from "react";
import { deleteProduct } from "../services/api";

const DeleteProduct = ({ productId }) => {
  const handleDelete = async () => {
    try {
      await deleteProduct(productId);
      alert("Produto deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  return (
    <button onClick={handleDelete}>Deletar Produto</button>
  );
};

export default DeleteProduct;
