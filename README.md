# Projeto HTTP Express

Um servidor Express simples que demonstra requisições GET e POST com parâmetros personalizados.

## 📋 Descrição

Este projeto implementa um servidor Node.js usando Express que fornece uma API com rotas que aceitam o nome de um usuário e retornam uma mensagem de saudação personalizada.

## 🚀 Requisitos

- Node.js (v12 ou superior)
- npm ou yarn

## 📦 Instalação

1. Clone ou extraia o projeto
2. Instale as dependências:

```bash
npm install
```

## 🏃 Como Executar

```bash
npm start
# ou
node server.js
```

O servidor iniciará e exibirá:
```
Servidor rodando em http://localhost:3000
```

> Bonus: Acesse `http://localhost:3000/` no navegador para ver uma página HTML/CSS de status do servidor (visual, com cartão e animação).

## 🔌 Endpoints

### GET `/rota`

Retorna uma saudação através de parâmetro de query.

**Parâmetros:**
- `nome` (string) - Nome da pessoa a saudar

**Exemplo:**
```bash
curl "http://localhost:3000/rota?nome=João"
```

**Resposta:**
```
Olá, João! (via GET)
```

### POST `/rota`

Retorna uma saudação através do body da requisição.

**Body (JSON):**
```json
{
  "nome": "Maria"
}
```

**Exemplo com curl:**
```bash
curl -X POST http://localhost:3000/rota \
  -H "Content-Type: application/json" \
  -d '{"nome":"Maria"}'
```

**Resposta:**
```
Olá, Maria! (via POST)
```

## ⚙️ Dependências

- **Express** (^5.2.1) - Framework web minimalista para Node.js

## 📝 Estrutura do Projeto

```
projeto-http-express/
├── server.js           # Arquivo principal do servidor
├── package.json        # Configuração do projeto
└── README.md          # Este arquivo
```

## 📄 Licença

ISC

## 👤 Autor

Sirlande Martins
