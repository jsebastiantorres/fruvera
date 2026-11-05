#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/5a0b777c7a528a2276a3fe8e3f53a4e93bad8d1816e069ba4a6422db20cf6b2c/contract';
import endContract from '../../snapshots/5a0b777c7a528a2276a3fe8e3f53a4e93bad8d1816e069ba4a6422db20cf6b2c/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  primaryKey,
  sql,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'almacen',
        columns: [
          col('descripcion', 'character varying(255)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 255 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'aspecto_visual',
        columns: [
          col('descripcion', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'categoria',
        columns: [
          col('descripcion', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'cliente',
        columns: [
          col('ciudad', 'character varying(100)', {
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('correo_electronico', 'character varying(100)', {
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('direccion', 'character varying(100)', {
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('documento', 'character varying(20)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 20 } },
          }),
          col('estado_cliente_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('telefono', 'character varying(20)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 20 } },
          }),
          col('tipo_persona_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('updated_at', 'timestamp', { codecRef: { codecId: 'pg/timestamp-string@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'colaborador',
        columns: [
          col('apellidos', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('documento', 'character varying(20)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 20 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombres', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('telefono', 'character varying(20)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 20 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'detalle_orden_compra',
        columns: [
          col('cantidad_solicitada', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('orden_compra_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('presentacion_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('producto_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'chk_detalle_orden_cantidad_solicitada_9fadee7c',
            sql`cantidad_solicitada > 0`,
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'estado_calidad',
        columns: [
          col('descripcion', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'estado_cliente',
        columns: [
          col('descripcion', 'character varying(255)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 255 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'estado_orden',
        columns: [
          col('descripcion', 'character varying(255)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 255 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'estado_salida',
        columns: [
          col('descripcion', 'character varying(255)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 255 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'estado_usuario',
        columns: [
          col('descripcion', 'character varying(255)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 255 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'lote',
        columns: [
          col('costo_total_lote', 'int8', { notNull: true, codecRef: { codecId: 'pg/int8@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('proveedor_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'lote_detalle',
        columns: [
          col('aspecto_visual_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('cantidad_aceptada', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('costo_total', 'int8', { notNull: true, codecRef: { codecId: 'pg/int8@1' } }),
          col('costo_unidad', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('estado_calidad_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('fecha_vencimiento', 'date', { codecRef: { codecId: 'pg/date-string@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('lote_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('presentacion_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('producto_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'chk_lote_detalle_cantidad_aceptada_26082a2f',
            sql`cantidad_aceptada > 0`,
          ),
          checkExpression('chk_lote_detalle_costo_total_b9566886', sql`costo_total > 0`),
          checkExpression('chk_lote_detalle_costo_unidad_b54527f4', sql`costo_unidad > 0`),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'merma',
        columns: [
          col('cantidad', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('created_at', 'timestamp', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamp-string@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('lote_detalle_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('merma_tipo_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('observacion', 'character varying(150)', {
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 150 } },
          }),
          col('usuario_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('chk_merma_cantidad_67dbd971', sql`cantidad > 0`),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'merma_tipo',
        columns: [
          col('descripcion', 'character varying(150)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 150 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(50)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 50 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'movimiento_ingreso',
        columns: [
          col('almacen_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('created_at', 'timestamp', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamp-string@1' },
          }),
          col('fecha_hora_recepcion', 'timestamp', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamp-string@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('lote_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('observacion', 'character varying(250)', {
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 250 } },
          }),
          col('orden_compra_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('usuario_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'movimiento_salida',
        columns: [
          col('almacen_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('cliente_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('created_at', 'timestamp', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamp-string@1' },
          }),
          col('estado_salida_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('fecha_hora_salida', 'timestamp', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamp-string@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('observacion', 'character varying(250)', {
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 250 } },
          }),
          col('usuario_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('vale_manual', 'character varying(50)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 50 } },
          }),
          col('vendedor_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'orden_compra',
        columns: [
          col('asunto', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('created_at', 'timestamp', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamp-string@1' },
          }),
          col('estado_orden_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('numero_orden', 'character varying(50)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 50 } },
          }),
          col('usuario_aprobador_id', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('usuario_creador_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'presentacion',
        columns: [
          col('descripcion', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'producto',
        columns: [
          col('categoria_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('descripcion', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('updated_at', 'timestamp', { codecRef: { codecId: 'pg/timestamp-string@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'proveedor',
        columns: [
          col('ciudad', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('correo_electronico', 'character varying(100)', {
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('descripcion', 'character varying(100)', {
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('direccion', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('documento', 'character varying(20)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 20 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('telefono', 'character varying(20)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 20 } },
          }),
          col('updated_at', 'timestamp', { codecRef: { codecId: 'pg/timestamp-string@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'rol',
        columns: [
          col('descripcion', 'character varying(255)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 255 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'salida_detalle',
        columns: [
          col('cantidad', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('lote_detalle_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('movimiento_salida_id', 'int4', {
            notNull: true,
            codecRef: { codecId: 'pg/int4@1' },
          }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('chk_salida_detalle_cantidad_67dbd971', sql`cantidad > 0`),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'stock_actual',
        columns: [
          col('almacen_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('cantidad', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('lote_detalle_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('updated_at', 'timestamp', { codecRef: { codecId: 'pg/timestamp-string@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression('chk_stock_actual_cantidad_4987df16', sql`cantidad >= 0`),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'tipo_persona',
        columns: [
          col('descripcion', 'character varying(100)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nombre', 'character varying(30)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 30 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'usuario',
        columns: [
          col('colaborador_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('estado_usuario_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('hash_password', 'character varying(255)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 255 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('rol_id', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('updated_at', 'timestamp', { codecRef: { codecId: 'pg/timestamp-string@1' } }),
          col('usuario', 'character varying(20)', {
            notNull: true,
            codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 20 } },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'almacen',
        constraint: 'almacen_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'aspecto_visual',
        constraint: 'aspecto_visual_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'categoria',
        constraint: 'categoria_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'cliente',
        constraint: 'cliente_documento_key',
        columns: ['documento'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'colaborador',
        constraint: 'colaborador_documento_key',
        columns: ['documento'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'colaborador',
        constraint: 'colaborador_telefono_key',
        columns: ['telefono'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'detalle_orden_compra',
        constraint: 'detalle_orden_compra_orden_compra_id_producto_id_presentacion_i',
        columns: ['orden_compra_id', 'producto_id', 'presentacion_id'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'estado_calidad',
        constraint: 'estado_calidad_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'estado_cliente',
        constraint: 'estado_cliente_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'estado_orden',
        constraint: 'estado_orden_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'estado_salida',
        constraint: 'estado_salida_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'estado_usuario',
        constraint: 'estado_usuario_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'lote_detalle',
        constraint: 'lote_detalle_lote_id_producto_id_presentacion_id_key',
        columns: ['lote_id', 'producto_id', 'presentacion_id'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'merma_tipo',
        constraint: 'merma_tipo_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'movimiento_ingreso',
        constraint: 'movimiento_ingreso_lote_id_key',
        columns: ['lote_id'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'movimiento_salida',
        constraint: 'movimiento_salida_vale_manual_key',
        columns: ['vale_manual'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'orden_compra',
        constraint: 'orden_compra_numero_orden_key',
        columns: ['numero_orden'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'presentacion',
        constraint: 'presentacion_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'producto',
        constraint: 'producto_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'proveedor',
        constraint: 'proveedor_documento_key',
        columns: ['documento'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'rol',
        constraint: 'rol_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'salida_detalle',
        constraint: 'salida_detalle_movimiento_salida_id_lote_detalle_id_key',
        columns: ['movimiento_salida_id', 'lote_detalle_id'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'stock_actual',
        constraint: 'stock_actual_lote_detalle_id_key',
        columns: ['lote_detalle_id'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'tipo_persona',
        constraint: 'tipo_persona_nombre_key',
        columns: ['nombre'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'usuario',
        constraint: 'usuario_usuario_key',
        columns: ['usuario'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'usuario',
        constraint: 'usuario_colaborador_id_key',
        columns: ['colaborador_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'cliente',
        index: 'cliente_estado_cliente_id_idx_55b7ed8c',
        columns: ['estado_cliente_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'cliente',
        index: 'cliente_tipo_persona_id_idx_af35c0ca',
        columns: ['tipo_persona_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'detalle_orden_compra',
        index: 'detalle_orden_compra_orden_compra_id_idx_782cdc95',
        columns: ['orden_compra_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'detalle_orden_compra',
        index: 'detalle_orden_compra_presentacion_id_idx_198e35dc',
        columns: ['presentacion_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'detalle_orden_compra',
        index: 'detalle_orden_compra_producto_id_idx_52b7577c',
        columns: ['producto_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'lote',
        index: 'lote_proveedor_id_idx_1b396b01',
        columns: ['proveedor_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'lote_detalle',
        index: 'lote_detalle_aspecto_visual_id_idx_ea58e75c',
        columns: ['aspecto_visual_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'lote_detalle',
        index: 'lote_detalle_estado_calidad_id_idx_2524665d',
        columns: ['estado_calidad_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'lote_detalle',
        index: 'lote_detalle_lote_id_idx_11faf971',
        columns: ['lote_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'lote_detalle',
        index: 'lote_detalle_presentacion_id_idx_198e35dc',
        columns: ['presentacion_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'lote_detalle',
        index: 'lote_detalle_prod_pres_venc_idx',
        columns: ['producto_id', 'presentacion_id', 'fecha_vencimiento'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'lote_detalle',
        index: 'lote_detalle_producto_id_idx_52b7577c',
        columns: ['producto_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'merma',
        index: 'merma_created_at_idx_225d8c0f',
        columns: ['created_at'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'merma',
        index: 'merma_lote_detalle_id_idx_17f67bb6',
        columns: ['lote_detalle_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'merma',
        index: 'merma_merma_tipo_id_idx_37b490df',
        columns: ['merma_tipo_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'merma',
        index: 'merma_usuario_id_idx_65b6616a',
        columns: ['usuario_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'movimiento_ingreso',
        index: 'movimiento_ingreso_almacen_id_idx_6738a346',
        columns: ['almacen_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'movimiento_ingreso',
        index: 'movimiento_ingreso_fecha_hora_recepcion_idx_e96beeeb',
        columns: ['fecha_hora_recepcion'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'movimiento_ingreso',
        index: 'movimiento_ingreso_orden_compra_id_idx_782cdc95',
        columns: ['orden_compra_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'movimiento_ingreso',
        index: 'movimiento_ingreso_usuario_id_idx_65b6616a',
        columns: ['usuario_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'movimiento_salida',
        index: 'movimiento_salida_almacen_id_idx_6738a346',
        columns: ['almacen_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'movimiento_salida',
        index: 'movimiento_salida_cliente_id_idx_9196b84e',
        columns: ['cliente_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'movimiento_salida',
        index: 'movimiento_salida_estado_salida_id_idx_98e38587',
        columns: ['estado_salida_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'movimiento_salida',
        index: 'movimiento_salida_fecha_hora_salida_idx_0f4e124d',
        columns: ['fecha_hora_salida'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'movimiento_salida',
        index: 'movimiento_salida_usuario_id_idx_65b6616a',
        columns: ['usuario_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'movimiento_salida',
        index: 'movimiento_salida_vendedor_id_idx_bc45117a',
        columns: ['vendedor_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'orden_compra',
        index: 'orden_compra_estado_orden_id_idx_f70450c8',
        columns: ['estado_orden_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'orden_compra',
        index: 'orden_compra_usuario_aprobador_id_idx_80d93a0d',
        columns: ['usuario_aprobador_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'orden_compra',
        index: 'orden_compra_usuario_creador_id_idx_565136e2',
        columns: ['usuario_creador_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'producto',
        index: 'producto_categoria_id_idx_6ad70c39',
        columns: ['categoria_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'salida_detalle',
        index: 'salida_detalle_lote_detalle_id_idx_17f67bb6',
        columns: ['lote_detalle_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'salida_detalle',
        index: 'salida_detalle_movimiento_salida_id_idx_eff345b2',
        columns: ['movimiento_salida_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'stock_actual',
        index: 'stock_actual_almacen_id_idx_6738a346',
        columns: ['almacen_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'usuario',
        index: 'usuario_estado_usuario_id_idx_69fffc57',
        columns: ['estado_usuario_id'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'usuario',
        index: 'usuario_rol_id_idx_369fac19',
        columns: ['rol_id'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'cliente',
        foreignKey: {
          name: 'cliente_tipo_persona_id_fkey',
          columns: ['tipo_persona_id'],
          references: { schema: 'public', table: 'tipo_persona', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'cliente',
        foreignKey: {
          name: 'cliente_estado_cliente_id_fkey',
          columns: ['estado_cliente_id'],
          references: { schema: 'public', table: 'estado_cliente', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'detalle_orden_compra',
        foreignKey: {
          name: 'detalle_orden_compra_orden_compra_id_fkey',
          columns: ['orden_compra_id'],
          references: { schema: 'public', table: 'orden_compra', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'detalle_orden_compra',
        foreignKey: {
          name: 'detalle_orden_compra_producto_id_fkey',
          columns: ['producto_id'],
          references: { schema: 'public', table: 'producto', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'detalle_orden_compra',
        foreignKey: {
          name: 'detalle_orden_compra_presentacion_id_fkey',
          columns: ['presentacion_id'],
          references: { schema: 'public', table: 'presentacion', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'lote',
        foreignKey: {
          name: 'lote_proveedor_id_fkey',
          columns: ['proveedor_id'],
          references: { schema: 'public', table: 'proveedor', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'lote_detalle',
        foreignKey: {
          name: 'lote_detalle_lote_id_fkey',
          columns: ['lote_id'],
          references: { schema: 'public', table: 'lote', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'lote_detalle',
        foreignKey: {
          name: 'lote_detalle_producto_id_fkey',
          columns: ['producto_id'],
          references: { schema: 'public', table: 'producto', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'lote_detalle',
        foreignKey: {
          name: 'lote_detalle_presentacion_id_fkey',
          columns: ['presentacion_id'],
          references: { schema: 'public', table: 'presentacion', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'lote_detalle',
        foreignKey: {
          name: 'lote_detalle_aspecto_visual_id_fkey',
          columns: ['aspecto_visual_id'],
          references: { schema: 'public', table: 'aspecto_visual', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'lote_detalle',
        foreignKey: {
          name: 'lote_detalle_estado_calidad_id_fkey',
          columns: ['estado_calidad_id'],
          references: { schema: 'public', table: 'estado_calidad', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'merma',
        foreignKey: {
          name: 'merma_lote_detalle_id_fkey',
          columns: ['lote_detalle_id'],
          references: { schema: 'public', table: 'lote_detalle', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'merma',
        foreignKey: {
          name: 'merma_merma_tipo_id_fkey',
          columns: ['merma_tipo_id'],
          references: { schema: 'public', table: 'merma_tipo', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'merma',
        foreignKey: {
          name: 'merma_usuario_id_fkey',
          columns: ['usuario_id'],
          references: { schema: 'public', table: 'usuario', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'movimiento_ingreso',
        foreignKey: {
          name: 'movimiento_ingreso_orden_compra_id_fkey',
          columns: ['orden_compra_id'],
          references: { schema: 'public', table: 'orden_compra', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'movimiento_ingreso',
        foreignKey: {
          name: 'movimiento_ingreso_lote_id_fkey',
          columns: ['lote_id'],
          references: { schema: 'public', table: 'lote', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'movimiento_ingreso',
        foreignKey: {
          name: 'movimiento_ingreso_usuario_id_fkey',
          columns: ['usuario_id'],
          references: { schema: 'public', table: 'usuario', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'movimiento_ingreso',
        foreignKey: {
          name: 'movimiento_ingreso_almacen_id_fkey',
          columns: ['almacen_id'],
          references: { schema: 'public', table: 'almacen', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'movimiento_salida',
        foreignKey: {
          name: 'movimiento_salida_cliente_id_fkey',
          columns: ['cliente_id'],
          references: { schema: 'public', table: 'cliente', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'movimiento_salida',
        foreignKey: {
          name: 'movimiento_salida_vendedor_id_fkey',
          columns: ['vendedor_id'],
          references: { schema: 'public', table: 'colaborador', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'movimiento_salida',
        foreignKey: {
          name: 'movimiento_salida_estado_salida_id_fkey',
          columns: ['estado_salida_id'],
          references: { schema: 'public', table: 'estado_salida', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'movimiento_salida',
        foreignKey: {
          name: 'movimiento_salida_usuario_id_fkey',
          columns: ['usuario_id'],
          references: { schema: 'public', table: 'usuario', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'movimiento_salida',
        foreignKey: {
          name: 'movimiento_salida_almacen_id_fkey',
          columns: ['almacen_id'],
          references: { schema: 'public', table: 'almacen', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'orden_compra',
        foreignKey: {
          name: 'orden_compra_usuario_creador_id_fkey',
          columns: ['usuario_creador_id'],
          references: { schema: 'public', table: 'usuario', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'orden_compra',
        foreignKey: {
          name: 'orden_compra_usuario_aprobador_id_fkey',
          columns: ['usuario_aprobador_id'],
          references: { schema: 'public', table: 'usuario', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'orden_compra',
        foreignKey: {
          name: 'orden_compra_estado_orden_id_fkey',
          columns: ['estado_orden_id'],
          references: { schema: 'public', table: 'estado_orden', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'producto',
        foreignKey: {
          name: 'producto_categoria_id_fkey',
          columns: ['categoria_id'],
          references: { schema: 'public', table: 'categoria', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'salida_detalle',
        foreignKey: {
          name: 'salida_detalle_movimiento_salida_id_fkey',
          columns: ['movimiento_salida_id'],
          references: { schema: 'public', table: 'movimiento_salida', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'salida_detalle',
        foreignKey: {
          name: 'salida_detalle_lote_detalle_id_fkey',
          columns: ['lote_detalle_id'],
          references: { schema: 'public', table: 'lote_detalle', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'stock_actual',
        foreignKey: {
          name: 'stock_actual_lote_detalle_id_fkey',
          columns: ['lote_detalle_id'],
          references: { schema: 'public', table: 'lote_detalle', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'stock_actual',
        foreignKey: {
          name: 'stock_actual_almacen_id_fkey',
          columns: ['almacen_id'],
          references: { schema: 'public', table: 'almacen', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'usuario',
        foreignKey: {
          name: 'usuario_estado_usuario_id_fkey',
          columns: ['estado_usuario_id'],
          references: { schema: 'public', table: 'estado_usuario', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'usuario',
        foreignKey: {
          name: 'usuario_rol_id_fkey',
          columns: ['rol_id'],
          references: { schema: 'public', table: 'rol', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'usuario',
        foreignKey: {
          name: 'usuario_colaborador_id_fkey',
          columns: ['colaborador_id'],
          references: { schema: 'public', table: 'colaborador', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
