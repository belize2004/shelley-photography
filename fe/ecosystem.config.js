module.exports = {
  apps: [
    {
      name: "shelley-fe",
      script: "pnpm",
      args: "run start -p 3010",
      watch: false,
      instances: 1,
      autorestart: true,
    },
  ],
};
