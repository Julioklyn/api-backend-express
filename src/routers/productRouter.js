// src/routers/productRouter.js
import express from 'express';

const router = express.Router();

// Criar ou atualizar produto
router.post('/update', (req, res) => {
  const dados = req.body;
  res.json({
    message: 'Produto atualizado com sucesso',
    product: dados
  });
});

// Lista todos os produtos
router.get('/', (req, res) => {
  res.json({ message: 'Obtendo dados do Produto' });
});

// Atualizar produto
router.put('/', (req, res) => {
  res.json({ message: 'Produto atualizado com sucesso' });
});

// Excluir produto
router.delete('/', (req, res) => {
  res.json({ message: 'Produto excluído com sucesso' });
});

export default router;
