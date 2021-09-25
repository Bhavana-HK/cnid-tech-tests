import connectRedis from 'connect-redis';
import cors from 'cors';
import express, { ErrorRequestHandler } from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import { COOKIE_NAME } from './constants';
import routes from './routes';

const main = async () => {
    const app = express();
    app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

    const RedisStore = connectRedis(session);
    const redis = new Redis();

    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redis,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 365 * 10,
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
            },
            saveUninitialized: false,
            secret: 'dawsdqwujequ8ihqwuyewu',
            resave: false,
        })
    );

    const errorHandler: ErrorRequestHandler = (error, _req, res) => {
        console.error(error);
        res.status(500).send({ error });
    };

    app.use('/', routes);
    app.use(errorHandler);

    app.listen(4000, () => console.log('Server started on port 4000'));
};

main().catch((err) => console.log(err));
