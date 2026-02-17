/**
 * PM2 config for nurovet Next.js frontend.
 * Usage: pm2 start ecosystem.config.cjs
 * Port must match nginx proxy_pass (1666) and package.json "next start -p 1666".
 */
module.exports = {
  apps: [
    {
      name: 'nurovet-frontend',
      cwd: __dirname,
      script: 'node_modules/.bin/next',
      args: 'start',
      interpreter: 'none',
      env: {
        PORT: 1666,
        NODE_ENV: 'production',
      },
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
};
