const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

const produtos = [
  {
    id: 1,
    nome: "Boné",
    preco: 10.0,
    descricao:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.",
    imagem: "/img/bone.avif",
  },
  {
    id: 2,
    nome: "Moletom",
    preco: 20.0,
    descricao: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagem: "/img/moletom.avif",
  },
  {
    id: 3,
    nome: "Tênis",
    preco: 30.0,
    descricao: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagem: "/img/tenis.avif",
  },
  {
    id: 4,
    nome: "Skate",
    preco: 150.0,
    descricao: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imagem: "/img/skate.avif",
  },
];

app.get("/produtos/:produtoId", (req, res) => {
  const produtoId = parseInt(req.params.produtoId, 10);
  const produto = produtos.find((p) => p.id === produtoId);

  if (!produto) {
    return res.status(404).send("Produto não encontrado");
  }

  res.render("produto", { produto });
});

app.get("/", (req, res) => {
  res.render("home", { produtos });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
