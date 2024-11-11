// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import {withIronSession} from 'next-iron-session'

export default function withSession(handler) {
    return withIronSession(handler, {
        // password: "okp2oJszqs/cgn+NQhIQ+Q9JCMHHUG/yVgHnqP09u2k=",
        password: process.env.SECRET_COOKIE_PASSWORD,
        cookieName: 'SMIS',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production',
        },
    })
}