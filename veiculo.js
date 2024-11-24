//importa o express
const express = require("express");
const rotas = express.Router();
// rota raiz
rotas.get("/", (req, res) => {
  res.send("rota raiz de veiculos");
});
//rota put
rotas.put("/", (req, res) => {
  res.send("Você está na rota put para veiculo.");
});
//rota post
rotas.post("/", (req, res) => {
  res.send("Você está na rota post para veiculo.");
});
//rota delete
rotas.delete("/", (req, res) => {
  res.send("Você está na rota delete para veiculo.");
});
//exporta as rotas
module.exports = rotas;