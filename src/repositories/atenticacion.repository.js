// importamos la database
import { db } from "../prisma/db.ts";

// registrar

// login

// obtener roles
export async function getAllRoles() {
  return db.orm.public.Rol.select("id", "nombre", "descripcion").all();
}

// obtener estados
export async function getAllEstados() {
  return db.orm.public.EstadoUsuario.select(
    "id",
    "nombre",
    "descripcion",
  ).all();
}
