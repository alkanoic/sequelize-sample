import express from 'express'
import strongErrorHandler from 'strong-error-handler';

import {userRouterFactory} from './users/userRouterFactory';
import {postRouterFactory} from './posts/postRouterFactory';
import { baseTablesRouterFactory } from './baseTablesRouterFactory';
import { baseDetailsRouterFactory } from './baseDetailsRouterFactory';

export const app: express.Express = express()
app.use(express.json())

app.use(userRouterFactory());
app.use(postRouterFactory());
app.use(baseTablesRouterFactory());
app.use(baseDetailsRouterFactory());

app.use(strongErrorHandler({
  debug: true,
}));

