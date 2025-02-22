import 'dotenv/config';
import './yup';

import express from 'express';
import http from 'http';
import https from 'https';

import { JSONParseError } from '../middlewares/JSONParseError';

import { router } from '../rotas';
import { CorsConfig } from './cors';
import { HttpsConfig } from './https';
import { MorganConfig } from './morgan';

const app = express();

app.use(express.json({ limit: '5mb' })); // máximo 5mb
app.use(JSONParseError);
app.use(CorsConfig.corsMiddleware);
app.use(express.json());
app.use(router);

MorganConfig.setupMorganBody(app);

const serverHttp = http.createServer(app);
const serverHttps = https.createServer(HttpsConfig.httpsOptions, app);

export const ExpressConfig = { app, serverHttp, serverHttps };
