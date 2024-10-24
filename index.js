const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota raiz redirecionando para a página de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html')); // Redireciona para login.html
});

// Rota para a página de formulário
app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formulario.html')); // Serve formulario.html
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
