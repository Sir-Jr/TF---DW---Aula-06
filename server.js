const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// ROTA GET
app.get('/rota', (req, res) => {
    const nome = req.query.nome;

    if (!nome) {
        return res.send('Você não enviou o nome!');
    }

    res.send(`Olá, ${nome}! (via GET)`);
});

// ROTA POST
app.post('/rota', (req, res) => {
    const nome = req.body.nome;

    if (!nome) {
        return res.send('Você não enviou o nome!');
    }

    res.send(`Olá, ${nome}! (via POST)`);
});

// SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});