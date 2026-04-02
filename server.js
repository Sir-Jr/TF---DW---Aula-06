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

// ROTA DE STATUS VISUAL
app.get('/', (req, res) => {
    res.send(`
        <!doctype html>
        <html lang="pt-BR">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Servidor Express Ativo</title>
            <style>
                body { margin: 0; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #252850, #3d5afe); color: #fff; }
                .container { min-height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center; padding: 2rem; }
                .card { background: rgba(255, 255, 255, 0.12); border: 1px solid rgba(255, 255, 255, 0.25); border-radius: 1rem; box-shadow: 0 0 30px rgba(0, 0, 0, 0.25); padding: 2rem; width: min(480px, 100%); }
                h1 { margin: 0 0 0.75rem; font-size: 2rem; color: #ffeb3b; }
                p { margin: 0.5rem 0; font-size: 1.1rem; }
                .pulse { display: inline-block; width: 12px; height: 12px; margin-left: 0.5rem; border-radius: 50%; background: #00e676; animation: pulse 1.2s infinite ease-in-out; }
                @keyframes pulse { 0% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.5); opacity: 1; } 100% { transform: scale(1); opacity: 0.8; } }
                .rota { margin-top: 1rem; color: #d1e8ff; font-size: 0.95rem; word-break: break-word; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="card">
                    <h1>Servidor rodando <span class="pulse"></span></h1>
                    <p>Parabéns! Esta é a rota raiz e o Express está funcionando.</p>
                    <p>Acesse <strong>http://localhost:${PORT}/</strong> sempre que quiser confirmar.</p>
                    <div class="rota">Teste também: <code>GET /rota?nome=SeuNome</code> ou <code>POST /rota {{ nome: "SeuNome" }}</code></div>
                </div>
            </div>
        </body>
        </html>
    `);
});

// SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});