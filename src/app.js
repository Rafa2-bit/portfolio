import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import { db } from "./database.js";

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
 

// Página inicial
app.get("/", async (req, res) => {
  const [projetos] = await db.query("SELECT * FROM projetos");
  const [cursos]   = await db.query("SELECT * FROM cursos");
  const [formacoes] = await db.query("SELECT * FROM formacoes");

  res.render("index", { projetos, cursos, formacoes });
});

// Rotas de adição
app.post("/add-projeto",upload.single("arquivo"), async (req, res) => {
  const { projeto, descricao, link } = req.body;
  const arquivo = req.file ? req.file.filename : null;

  await db.query(
    "INSERT INTO projetos (nome, descricao, link, arquivo) VALUES (?, ?, ?, ?)",
    [projeto, descricao, link, arquivo]
  );

  res.redirect("/");
});

app.post("/add-curso", upload.single("arquivo"), async (req, res) => {
   const { curso, competencias } = req.body;
  const arquivo = req.file ? req.file.filename : null;

  await db.query(
    "INSERT INTO cursos (nome, competencias, arquivo) VALUES (?, ?, ?)",
    [curso, competencias, arquivo]
  );

  res.redirect("/");
});

app.post("/add-formacao", async (req, res) => {
  const { formacao, data, descricao } = req.body;

  await db.query(
    "INSERT INTO formacoes (nome, data_formacao, descricao) VALUES (?, ?, ?)",
    [formacao, data, descricao]
  );

  res.redirect("/");
});



app.delete("/deletar-projeto/:index", async (req, res) => {
   await db.query("DELETE FROM projetos WHERE id = ?", [req.params.index]);
  res.sendStatus(200);
});

app.delete("/deletar-curso/:index", async (req, res) => {
  await db.query("DELETE FROM cursos WHERE id = ?", [req.params.index]);
  res.sendStatus(200);
});

app.delete("/deletar-formacao/:index", async (req, res) => {
  console.log(req.params.index)
  await db.query("DELETE FROM formacoes WHERE id = ?", [req.params.index]);
  res.sendStatus(200);
});

app.use(express.json());
app.put("/editar-projeto/:id", async (req, res) => {
   const { projeto, descricao, link } = req.body;

  await db.query(
    "UPDATE projetos SET nome=?, descricao=?, link=? WHERE id=?",
    [projeto, descricao, link, req.params.id]
  );

  res.send("Projeto atualizado");
});

app.use(express.json());
app.put("/editar-curso/:id", async (req, res) => {
  const { curso, competencias } = req.body;

  await db.query(
    "UPDATE cursos SET nome=?, competencias=? WHERE id=?",
    [curso, competencias, req.params.id]
  );

  res.send("Curso atualizado");
});

app.use(express.json());
app.put("/editar-formacao/:id", async (req, res) => {
   const { formacao, data, descricao } = req.body;

  await db.query(
    "UPDATE formacoes SET nome=?, data_formacao=?, descricao=? WHERE id=?",
    [formacao, data, descricao, req.params.id]
  );

  res.send("Formação atualizada");
});


app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));