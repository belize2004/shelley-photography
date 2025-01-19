module.exports = {
  apps: [
    {
      name: "shelley-be",
      script: "pnpm",
      args: "run start",
      watch: false,
      instances: 1,
      autorestart: true,
    },
  ],
};
