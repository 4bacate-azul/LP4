//importa o express
const express = require("express");
const rotas = express.Router();
//rota raiz
rotas.get("/", (req, res) => {
  res.send("rota raiz para cliente");
});
//rota put
rotas.put("/", (req, res) => {
  res.send("Você está na rota put para clientes.");
});
//rota post
rotas.post("/", (req, res) => {
  res.send("Você está na rota post para clientes.");
});
//rota delete
rotas.delete("/", (req, res) => {
  res.send("Você está na rota delete para clientes.");
});
//exporta as rotas
module.exports = rotas;