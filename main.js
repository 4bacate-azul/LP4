//importa o express
const express = require("express");
const app = express();

//importa as rotas
const clienterotas = require("./cliente");
const veiculorotas = require("./veiculo");

//define o ip e a porta
const hostname = "127.0.0.1";
const port = 8080;

//rota raiz
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//referencia as rotas de cliente e veículo
app.use("/cliente", clienterotas);
app.use("/veiculo", veiculorotas);

//roda o servidor
app.listen(port, hostname, console.log("Servidor rodando..."));