import { AbstractMigration, ClientMySQL, Info } from "https://deno.land/x/nessie@2.0.11/mod.ts"

export default class extends AbstractMigration<ClientMySQL> {
  /** Runs on migrate */
  async up(_info: Info): Promise<void> {
    await this.client.query(
      `
CREATE TABLE posts (
  uuid varchar(36) DEFAULT (uuid()) PRIMARY KEY,
  text varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`,
    )
  }

  /** Runs on rollback */
  async down(_info: Info): Promise<void> {
    await this.client.query(`DROP TABLE posts;`)
  }
}
