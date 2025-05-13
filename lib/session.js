import { SessionOptions } from 'iron-session';

export const sessionOptions = {
  password:
    process.env.SECRET_COOKIE_PASSWORD ||
    'okp2oJszqs/cgn+NQhIQ+Q9JCMHHUG/yVgHnqP09u2k=',
  cookieName: 'app.limitrova',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    httpOnly: true,
  },
};
