module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5431),
        database: env("DATABASE_NAME", "assetdb"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "Admin123"),
        schema: env("DATABASE_SCHEMA", "public"), // Not Required
        ssl: false,
      },
      options: {},
    },
  },
});
