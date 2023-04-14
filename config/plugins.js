module.exports = ({ env }) => ({
  
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      }
    }
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET')
    }
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 200,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
