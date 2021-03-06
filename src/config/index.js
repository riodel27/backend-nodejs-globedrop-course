require('dotenv').config()

module.exports = {
   development: {
      port: 3000,
      redisPort: 6379,
      logLevel: 'debug',
      nodeEnv: 'development',
      database: {
         url: 'mongodb://localhost:27017/globedrop',
      },
      accessTokenTtl: '24',
      secretToken: 'globedrop',
      secretRefreshToken: 'globedrop123',
      refreshTokenTtl: '30d',
      api: {
         prefix: '/api',
      },
      facebook: {
         oauth: {
            clientId: process.env.FACEBOOK_OAUTH_CLIENT_ID,
            secret: process.env.FACEBOOK_OAUTH_CLIENT_SECRET,
            callback: process.env.FACEBOOK_OAUTH_CALLBACK,
         },
      },
      google: {
         oauth: {
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
            secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
            callback: process.env.GOOGLE_OAUTH_CALLBACK,
         },
      },
   },
   production: {
      port: process.env.PORT,
      redisPort: process.env.REDIS_PORT,
      logLevel: process.env.LOG_LEVEL,
      nodeEnv: process.env.NODE_ENV,
      database: {
         url: process.env.MONGO_URI, // use external database storage
      },
      accessTokenTtl: process.env.SECRET_TOKEN_EXPIRED_IN,
      secretToken: process.env.SECRET_TOKEN_EXPIRED_IN,
      secretRefreshToken: process.env.SECRET_TOKEN,
      refreshTokenTtl: process.env.REFRESH_SECRET_TOKEN_EXPIRED_IN,
      api: {
         prefix: process.env.API_PREFIX,
      },
      facebook: {
         oauth: {
            clientId: process.env.FACEBOOK_OAUTH_CLIENT_ID,
            secret: process.env.FACEBOOK_OAUTH_CLIENT_SECRET,
            callback: process.env.FACEBOOK_OAUTH_CALLBACK,
         },
      },
      google: {
         oauth: {
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
            secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
            callback: process.env.GOOGLE_OAUTH_CALLBACK,
         },
      },
   },
   staging: {},
   test: {
      port: 3000,
      redisPort: 6379,
      logLevel: 'debug',
      nodeEnv: 'test',
      database: {
         url: 'mongodb://localhost:27017/TestGlobeDrop',
      },
      accessTokenTtl: '24',
      secretToken: 'globedrop',
      secretRefreshToken: 'globedrop123',
      refreshTokenTtl: '30d',
      api: {
         prefix: '/api',
      },
      facebook: {
         oauth: {
            clientId: process.env.FACEBOOK_OAUTH_CLIENT_ID,
            secret: process.env.FACEBOOK_OAUTH_CLIENT_SECRET,
            callback: process.env.FACEBOOK_OAUTH_CALLBACK,
         },
      },
      google: {
         oauth: {
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
            secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
            callback: process.env.GOOGLE_OAUTH_CALLBACK,
         },
      },
   },
}
