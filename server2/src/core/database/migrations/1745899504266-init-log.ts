import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitLog1745899504266 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS logs(
          id SERIAL PRIMARY KEY,
          card_id INT REFERENCES cards("id"),
          position_id INT REFERENCES positions("id"),
          time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          deleted_at TIMESTAMPTZ
        )
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS logs
      `);
  }
}
