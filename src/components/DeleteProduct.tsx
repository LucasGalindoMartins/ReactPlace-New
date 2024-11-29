import React from "react";
import { deleteProduct } from "../services/api";

// Tipagem para as props do DeleteProduct
interface DeleteProductProps {
  productId: number;  // Alterado para number
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ productId }) => {
  const handleDelete = async () => {
    try {
      await deleteProduct(productId);  // Agora productId é do tipo number
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
