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

// crear el colaborador
export async function createColaborador(objColaborador) {
  return db.orm.public.Colaborador.create(objColaborador);
}

// crear el usuario
export async function createUsuario(objUsuario) {
  return db.orm.public.Usuario.create(objUsuario);
}

// verificar si el usuario existe
export async function existUsuario(usuario) {
  return db.orm.public.Usuario.where({ usuario: usuario }).first();
}

// verificar si el documento existe
export async function existDocumento(documento) {
  return db.orm.public.Colaborador.where({ documento: documento }).first();
}
