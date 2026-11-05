#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/5a0b777c7a528a2276a3fe8e3f53a4e93bad8d1816e069ba4a6422db20cf6b2c/contract';
import startContract from '../../snapshots/5a0b777c7a528a2276a3fe8e3f53a4e93bad8d1816e069ba4a6422db20cf6b2c/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/c595706e2e2f1a486072e920332bbb968077d316dc68bf2eec5f940fa5cbd327/contract';
import endContract from '../../snapshots/c595706e2e2f1a486072e920332bbb968077d316dc68bf2eec5f940fa5cbd327/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

// Zona en la que estaban guardados los datos actuales (timestamp sin zona).
// Si el servidor/sesión estaba en UTC, déjalo así.
const ZONA_DATOS = 'America/Bogota';
const convertir = (columna: string) => `"${columna}" AT TIME ZONE '${ZONA_DATOS}'`;

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.alterColumnType({
        schema: 'public',
        table: 'cliente',
        column: 'updated_at',
        type: 'timestamptz',
        using: convertir('updated_at'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'merma',
        column: 'created_at',
        type: 'timestamptz',
        using: convertir('created_at'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'movimiento_ingreso',
        column: 'created_at',
        type: 'timestamptz',
        using: convertir('created_at'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'movimiento_ingreso',
        column: 'fecha_hora_recepcion',
        type: 'timestamptz',
        using: convertir('fecha_hora_recepcion'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'movimiento_salida',
        column: 'created_at',
        type: 'timestamptz',
        using: convertir('created_at'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'movimiento_salida',
        column: 'fecha_hora_salida',
        type: 'timestamptz',
        using: convertir('fecha_hora_salida'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'orden_compra',
        column: 'created_at',
        type: 'timestamptz',
        using: convertir('created_at'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'producto',
        column: 'updated_at',
        type: 'timestamptz',
        using: convertir('updated_at'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'proveedor',
        column: 'updated_at',
        type: 'timestamptz',
        using: convertir('updated_at'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'stock_actual',
        column: 'updated_at',
        type: 'timestamptz',
        using: convertir('updated_at'),
      }),
      this.alterColumnType({
        schema: 'public',
        table: 'usuario',
        column: 'updated_at',
        type: 'timestamptz',
        using: convertir('updated_at'),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);