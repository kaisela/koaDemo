module.exports = {
  apps : [{
    name      : 'API',
    script    : 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '203.195.235.49',
      ref  : 'origin/master',
      repo : 'git@github.com:kaisela/koaDemo.git',
      path : '/home/node/koaDemo',
      'post-deploy' : 'git pull origin master &&npm install && npm run prd'
    }
  }
};
