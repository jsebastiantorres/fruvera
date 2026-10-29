// import express
import express from "express";

// instancia de express para app.js
const app = express();

// middleware para trabajar con json
app.use(express.json());

// ruta raiz
app.get("/", (req, res) => {
  res.json({ mensaje: "Fruvera API funcionando" });
});

// PUERTO
const PORT = process.env.PORT || 3001;

// escuchar el app
app.listen(PORT, () => {
  console.log(`Servidor fruvera corriendo http://localhost:${PORT}`);
});
