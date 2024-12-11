const express = require('express');
const app = express();
const path = require('path');

// Servir arquivos estáticos (CSS, JS, imagens, etc)
app.use(express.static(path.join(__dirname, 'public')));

// Definindo a rota para a página principal (raiz)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar o servidor na porta 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
