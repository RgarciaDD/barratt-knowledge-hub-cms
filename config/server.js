module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("APP_URL"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "291538458cbc59b80535a52f96086518"),
    },
  },
});
