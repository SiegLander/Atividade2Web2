port = 3003;

const express = require("express");
const bd = require("./bancoDeDados");
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor inciado! Porta: ${port}`);
});

//listando usuários
app.get("/users", (req, res, next) => {
  res.send(bd.listUsers());
});

//listando infos de um usuário a partir de seu id
//@params (int id)
app.get("/users/:id", (req, res, next) => {
  res.send(bd.getUser(req.params.id));
});

//cadastrando novo usuário
//@params (String nome, email, address)
app.post("/users", (req, res, next) => {
  const user = bd.createUser({
    nome: req.body.nome,
    email: req.body.email,
    address: req.body.address,
  });
  res.send(user);
});

//atualizando usuário através de sua id
//@params (int id, String nome, email, address)
app.put("/users/:id", (req, res, next) => {
  const user = bd.updateUser(req.params.id, {
    nome: req.body.nome,
    email: req.body.email,
    address: req.body.address,
  });
  res.send(user);
});

//deletando usuário através de sua id
//@params (int id)
app.delete("/users/:id", (req, res, next) => {
  res.send(bd.deleteUser(req.params.id));
});
