import {Model, Table, Column, HasMany, DataType, PrimaryKey, ForeignKey, Default, IsUUID, Index, createIndexDecorator} from 'sequelize-typescript';

import {BaseDetails} from './baseDetails';
import { UUIDV4 } from 'sequelize';

const CompositeUniquePK = createIndexDecorator({
  name: "BaseTables_CPK", unique: true
})

@Table({tableName: 'baseTables'})
export class BaseTables extends Model {

  @PrimaryKey
  @Default(UUIDV4)
  @Column(DataType.UUID)
  baseTableId!: string;

  @Column(DataType.INTEGER)
  @CompositeUniquePK
  baseTableId1!: number;

  @Column(DataType.INTEGER)
  @CompositeUniquePK
  baseTableId2!: number;

  @Column(DataType.STRING)
  baseName!: string;

  @HasMany(() => BaseDetails)
  baseDetails: BaseDetails[] | undefined;
}
