module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  rateLimit: {
    interval: { min: 1},
    timeWait: 30*1000,
    max: 1
  }
});
