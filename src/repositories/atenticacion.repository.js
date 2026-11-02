// importamos la database
import { db } from "../prisma/db.ts";

// REGISTRO
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

// CREAR el colaborador
export async function createColaborador(objColaborador) {
  return db.orm.public.Colaborador.create(objColaborador);
}

// CREAR el usuario
export async function createUsuario(objUsuario) {
  return db.orm.public.Usuario.create(objUsuario);
}

// VERIFICAR si el usuario existe
export async function existUsuario(usuario) {
  return db.orm.public.Usuario.where({ usuario: usuario }).first();
}

// VERIFICAR si el documento existe
export async function existDocumento(documento) {
  return db.orm.public.Colaborador.where({ documento: documento }).first();
}

// LOGIN
// obtener usuario para el login
export async function getUsuarioLogin(usuario) {
  return db.orm.public.Usuario.where({ usuario: usuario }).first();
}


// resetear contraseña
export async function resetPassword(usuario, password) {
    return db.orm.public.Usuario.where({usuario: usuario}).update({ hashPassword: password });
}