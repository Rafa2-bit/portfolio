import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Define onde os arquivos serão salvos e o nome deles
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/"); // pasta onde os arquivos vão ficar
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // renomeia para evitar conflitos
  }
});

const upload = multer({ storage: storage });



// Dados temporários (memória)
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

// Rotas de exclusão
app.post("/delete-projeto", (req, res) => {
  projetos.splice(req.body.index, 1);
  res.redirect("/");
});

app.post("/delete-curso", (req, res) => {
  cursos.splice(req.body.index, 1);
  res.redirect("/");
});

app.post("/delete-formacao", (req, res) => {
  formacoes.splice(req.body.index, 1);
  res.redirect("/");
});

// Servidor
app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));
