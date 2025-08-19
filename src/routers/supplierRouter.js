// src/routers/supplierRouter.js
import express from 'express';

const router = express.Router();

// Criar ou atualizar fornecedor
router.post('/update', (req, res) => {
  const dados = req.body;
  res.json({
    message: 'Supplier updated successfully',
    supplier: dados
  });
});

// Lista todos os fornecedores
router.get('/', (req, res) => {
  res.json({ message: 'Obtendo dados do Fornecedor' });
});

// Atualizar fornecedor
router.put('/', (req, res) => {
  res.json({ message: 'Fornecedor atualizado com sucesso' });
});

// Excluir fornecedor
router.delete('/', (req, res) => {
  res.json({ message: 'Supplier excluído com sucesso' });
});

export default router;
