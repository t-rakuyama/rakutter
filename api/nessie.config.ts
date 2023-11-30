import {
  ClientMySQL,
  NessieConfig,
} from "https://deno.land/x/nessie@2.0.11/mod.ts";

const client = new ClientMySQL({
  hostname: "db",
  port: 3306,
  username: "root",
  password: "root",
  db: "rakutter",
});

/** This is the final config object */
const config: NessieConfig = {
  client,
  migrationFolders: ["./db/migrations"],
  seedFolders: ["./db/seeds"],
};

export default config;

// execute migrate through
