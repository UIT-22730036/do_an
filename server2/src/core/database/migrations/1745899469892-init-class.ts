import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitClass1745899469892 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS class(
                ma_lop SERIAL PRIMARY KEY,
                ten_lop TEXT UNIQUE,
                so_sv INT NOT NULL DEFAULT 0,
                createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE IF EXISTS class
        `);
  }
}
