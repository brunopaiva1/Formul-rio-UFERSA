const express = require('express');
const app = express();
const path = require('path');

// Configura a pasta 'public' para servir arquivos estáticos (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que envia o arquivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
