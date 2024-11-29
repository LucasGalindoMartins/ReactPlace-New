import React from "react";
import { deleteProduct } from "../services/api";

// Tipagem para as props do DeleteProduct
interface DeleteProductProps {
  productId: string;  // Assume-se que productId seja uma string, pode ser ajustado se necessário
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ productId }) => {
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
