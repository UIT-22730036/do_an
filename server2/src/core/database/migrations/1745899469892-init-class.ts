import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitClass1745899469892 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS class(
                id SERIAL PRIMARY KEY,
                name TEXT UNIQUE,
                student_count INT NOT NULL DEFAULT 0,
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                deleted_at TIMESTAMPTZ
            );

            ALTER TABLE students ADD COLUMN class_id INT REFERENCES class("id");
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE students DROP COLUMN class_id;
            DROP TABLE IF EXISTS class;
        `);
  }
}
