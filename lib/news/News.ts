import {Model, Table, Column, DataType, PrimaryKey, AllowNull} from 'sequelize-typescript';

@Table({tableName: 'news'})
export class News extends Model {

  @PrimaryKey
  @Column(DataType.INTEGER)
  articleId!: number;

  @PrimaryKey
  @Column(DataType.INTEGER)
  newsId!: number;

  @Column(DataType.ENUM('cat1', 'cat2', 'cat3')) category!: number;

  @Column(DataType.TEXT) name!: string;

  @AllowNull @Column(DataType.TEXT("long")) content: string | undefined;
}
