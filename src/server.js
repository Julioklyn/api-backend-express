import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.put('/produto', (req, res) => {
    //pegar dados do Usuário
  res.json('Usuário editado com sucesso!')
})

app.get('/profile', (req, res) => {
  res.json({ message: 'Obtendo dados do perfil' });
});

app.post('/profile', (req, res) => {
  const dados = req.body
  console.log(dados);
  res.json({ message: 'Perfil criado com sucesso' });
});

app.put('/profile', (req, res) => {
  res.json({ message: 'Perfil atualizado com sucesso' });
});

app.delete('/profile', (req, res) => {
  res.json({ message: 'Perfil excluído com sucesso' });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
