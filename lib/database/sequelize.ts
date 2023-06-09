import {Sequelize} from 'sequelize-typescript';

import {User} from '../users/User';
import {Post} from '../posts/Post';
import {News} from '../news/News';
import { BaseTables } from '../baseTables';
import { BaseDetails } from '../baseDetails';

export const sequelize = new Sequelize({
  host: '127.0.0.1',
  dialect: 'mysql',
  database: "test_database",
  username: 'docker',
  password: 'docker',
  models: [User, Post, News,BaseTables,BaseDetails],
});
