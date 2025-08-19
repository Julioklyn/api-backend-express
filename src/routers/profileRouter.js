// src/routers/profileRouter.js
import express from 'express';

const router = express.Router();

// Criar ou atualizar perfil
router.post('/update', (req, res) => {
  const dados = req.body;
  res.json({
    message: 'Profile updated successfully',
    profile: dados
  });
});

// Lista todos os perfis
router.get('/', (req, res) => {
  res.json({ message: 'Obtendo dados do perfil' });
});

// Atualizar perfil
router.put('/', (req, res) => {
  res.json({ message: 'Perfil atualizado com sucesso' });
});

// Excluir perfil
router.delete('/', (req, res) => {
  res.json({ message: 'Perfil excluído com sucesso' });
});

export default router;
