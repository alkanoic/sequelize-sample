import express from 'express'
import strongErrorHandler from 'strong-error-handler';

import {userRouterFactory} from './users/userRouterFactory';
import {postRouterFactory} from './posts/postRouterFactory';

export const app: express.Express = express()
app.use(express.json())

app.use(userRouterFactory());
app.use(postRouterFactory());

app.use(strongErrorHandler({
  debug: true,
}));

