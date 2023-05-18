import {Model, Table, Column, HasMany, DataType} from 'sequelize-typescript';

import {Post} from '../posts/Post';

@Table({tableName: 'users'})
export class User extends Model {

  @Column(DataType.INTEGER)
  postId!: number;

  @Column(DataType.STRING) name!: string;
  @HasMany(() => Post) posts: Post[] | undefined;

}
