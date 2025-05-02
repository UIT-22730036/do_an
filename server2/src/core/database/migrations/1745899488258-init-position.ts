import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitPosition1745899488258 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS positions(
          id SERIAL PRIMARY KEY,
          type TEXT NOT NULL DEFAULT 'area',
          name TEXT NOT NULL UNIQUE,
          lngs FLOAT[],
          lats FLOAT[],
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          deleted_at TIMESTAMPTZ
    )
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS positions
      `);
  }
}
