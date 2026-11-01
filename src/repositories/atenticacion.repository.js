// importamos la database
import { db } from "../prisma/db.ts";

// registrar

// login

// obtener estados
export async function getAllEstados() {
  return db.orm.public.EstadoUsuario.select(
    "id",
    "nombre",
    "descripcion",
  ).all();
}

// obtener roles
export async function getAllRoles() {
  return db.orm.public.Rol.select("id", "nombre", "descripcion").all();
}

// obtener rol usuario
export async function getRolUsuario() {
  return db.orm.public.Rol.select("id", "nombre")
    .where({ nombre: "usuario" })
    .first();
}
