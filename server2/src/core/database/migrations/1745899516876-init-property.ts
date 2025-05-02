import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitProperty1745899516876 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE IF NOT EXISTS properties(
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL UNIQUE,
            position_id INT REFERENCES positions("id"),
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            deleted_at TIMESTAMPTZ
          )
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS properties
      `);
  }
}
