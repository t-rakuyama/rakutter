import {
  AbstractSeed,
  Info,
  ClientMySQL,
} from "https://deno.land/x/nessie@2.0.11/mod.ts";

export default class extends AbstractSeed<ClientMySQL> {
  /** Runs on seed */
  async run(_info: Info): Promise<void> {
    await this.client.query("TRUNCATE TABLE posts;");
    await this.client.query(
      "INSERT INTO posts (uuid, text) VALUES ('13934e0b-8f8b-11ee-a33f-0242c0a8a702', 'Hello, world!');"
    );
    await this.client.query(
      "INSERT INTO posts (uuid, text) VALUES ('1393aa8d-8f8b-11ee-a33f-0242c0a8a702', 'Hello, world Again!');"
    );
  }
}
