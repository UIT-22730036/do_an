import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitStudent1745899450465 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "students" (
                ma_sv TEXT PRIMARY KEY,
                ma_lop TEXT,
                ten_sv TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS cards;
        DROP TABLE IF EXISTS class;
        DROP TABLE IF EXISTS students;
    `);
  }
}
