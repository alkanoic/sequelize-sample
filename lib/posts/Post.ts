import {Model, Table, Column, ForeignKey, BelongsTo, DataType} from 'sequelize-typescript';

import {User} from '../users/User';

@Table
export class Post extends Model {

  @Column(DataType.STRING) text!: string;
  @ForeignKey(() => User) @Column(DataType.INTEGER) userId!: number;
  @BelongsTo(() => User)
  user!: User;
}
