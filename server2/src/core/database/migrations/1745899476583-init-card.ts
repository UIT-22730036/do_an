import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitCard1745899476583 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS cards (
                ma_the SERIAL PRIMARY KEY,
                ma_sv INT UNIQUE REFERENCES students("ma_sv") ON DELETE CASCADE,
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                expired_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '1 year'),
                updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS cards
    `);
  }
}
