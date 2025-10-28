import helmet from 'helmet';

const nodeEnv = process.env.NODE_ENV || 'development';

export const configureHelmet = () => {
  const isProd = nodeEnv === 'production';

  return helmet({
    contentSecurityPolicy: {
      directives: isProd
        ? {
            'default-src': ['\'none\''],
          }
        : {
            'script-src': ['\'self\'', 'https://cdn.jsdelivr.net'],
          },
    },
  });
};
