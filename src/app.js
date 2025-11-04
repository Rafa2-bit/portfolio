import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });



let projetos = [];
let cursos = [];
let formacoes = [];

// Página inicial
app.get("/", (req, res) => {
  res.render("index", { projetos, cursos, formacoes });
});

// Rotas de adição
app.post("/add-projeto",upload.single("arquivo"), (req, res) => {
  const novoProjeto = {
    projeto: req.body.projeto,
    descricao: req.body.descricao,
    link: req.body.link,
    arquivo: req.file ? req.file.filename : null
  }

  projetos.push(novoProjeto);
  res.redirect("/");
});

app.post("/add-curso", upload.single("arquivo"), (req, res) => {
  const novoCurso = {
    curso: req.body.curso,
    competencias: req.body.competencias,
    arquivo: req.file ? req.file.filename : null
  };

  cursos.push(novoCurso);
  res.redirect("/");
});

app.post("/add-formacao", (req, res) => {
  const novaFormacao = {
    formacao: req.body.formacao,
    data: req.body.data,
    descricao: req.body.descricao,
  };

  formacoes.push(novaFormacao);
  res.redirect("/");
});



app.delete("/deletar-projeto/:index", (req, res) => {
  const { index } = req.params;
  projetos.splice(index, 1);
  res.sendStatus(200);
});

app.delete("/deletar-curso/:index", (req, res) => {
  const { index } = req.params;
  cursos.splice(index, 1);
  res.sendStatus(200);
});

app.delete("/deletar-formacao/:index", (req, res) => {
  const { index } = req.params;
  formacoes.splice(index, 1);
  res.sendStatus(200);
});

app.use(express.json());
app.put("/editar-projeto/:id", (req, res) => {
  const id = parseInt(req.params.id);
  projetos[id] = req.body;
  res.status(200).send("Projeto atualizado");
});

app.use(express.json());
app.put("/editar-curso/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cursos[id] = req.body;
  res.status(200).send("Curso atualizado");
});

app.use(express.json());
app.put("/editar-formacao/:id", (req, res) => {
  const id = parseInt(req.params.id);
  formacoes[id] = req.body;
  res.status(200).send("Formação atualizada");
});

/*app.post("/delete-curso", (req, res) => {
  cursos.splice(req.body.index, 1);
  res.redirect("/");
});*/

/*app.post("/delete-formacao", (req, res) => {
  formacoes.splice(req.body.index, 1);
  res.redirect("/");
});*/


app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));
