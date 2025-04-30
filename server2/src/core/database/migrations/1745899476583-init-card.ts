import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitCard1745899476583 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS cards (
                ma_the TEXT PRIMARY KEY,
                ma_sv TEXT UNIQUE REFERENCES students("ma_sv") ON DELETE CASCADE,
                createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                expiredAt TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '1 year'),
                updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS cards
    `);
  }
}
