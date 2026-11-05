// importar configuracion de dotenv
import "dotenv/config";

// import express
import express from "express";

// instancia de express para app.js
const app = express();

// middleware para trabajar con json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONFIG AUTENTICACION
// import express-session
import session from "express-session";
// import connect para postgreSQL
import connectPgSimple from "connect-pg-simple";
const PgSession = connectPgSimple(session);

// PUERTO
const PORT = process.env.PORT || 3001;

// importar el pool
import { pool } from "./src/db/pool.js";
// const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// configuracion del pool de sesion
app.use(
  session({
    store: new PgSession({
      pool,
      tableName: "session",
      createTableIfMissing: false,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 100 * 60 * 60,
    },
  }),
);

// IMPORTACION DE RUTAS
// ruta autenticacion
import autenticacionRoute from "./src/routes/autenticacion.route.js";

// ruta raiz
app.get("/", (req, res) => {
  console.log("rutas funcionando");
  res.json({ mensaje: "Fruvera API funcionando" });
});

// RUTAS
app.use("/autenticacion", autenticacionRoute);

// escuchar el app
app.listen(PORT, () => {
  console.log(`Servidor fruvera corriendo http://localhost:${PORT}`);
});

// tabajando en la rama de develop
