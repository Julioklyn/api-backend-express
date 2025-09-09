import { list } from "../../models/productModel.js";

export const listProductController = async (req, res) => {
  try {
    const products = await list();
    res.json({
      message: 'Produtos consultados com sucesso!',
      products: products
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao listar produtos',
      error: error.message
    });
  }
}