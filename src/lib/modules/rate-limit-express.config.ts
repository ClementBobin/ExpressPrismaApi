import rateLimit from 'express-rate-limit';

const rememberIpMinutes = parseInt(process.env.REMEMBER_IP_MINUTES || '5', 10);
const numberRequestPerIp = parseInt(process.env.NUMBER_REQUEST_PER_IP || '80', 10);

export const configureRateLimit = () => {
  return rateLimit({
    windowMs: rememberIpMinutes * 60 * 1000,
    max: numberRequestPerIp,
    message: {
      isSuccess: false,
      message: 'Too many requests, please try again later.'
    }
  });
};
