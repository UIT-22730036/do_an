import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitCard1745899476583 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS cards (
                id SERIAL PRIMARY KEY,
                student_id INT REFERENCES students("id"),
                expired_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '1 year'),
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                deleted_at TIMESTAMPTZ
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS cards
    `);
  }
}
