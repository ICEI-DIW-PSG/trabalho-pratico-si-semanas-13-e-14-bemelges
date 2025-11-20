const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint para retornar shows do db.json
app.get('/shows', (req, res) => {
  const dbPath = path.join(__dirname, 'db', 'db.json');
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  res.json(data.shows);
});

// Endpoint para retornar usuários do db.json
app.get('/usuarios', (req, res) => {
  const dbPath = path.join(__dirname, 'db', 'db.json');
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  const { email, senha } = req.query;
  
  if (email && senha) {
    const usuarios = data.usuarios.filter(u => u.email === email && u.senha === senha);
    res.json(usuarios);
  } else {
    res.json(data.usuarios);
  }
});

// Endpoint para adicionar novo usuário
app.post('/usuarios', (req, res) => {
  const dbPath = path.join(__dirname, 'db', 'db.json');
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  
  data.usuarios.push(req.body);
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  
  res.status(201).json(req.body);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
