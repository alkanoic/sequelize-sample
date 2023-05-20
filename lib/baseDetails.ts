import {Model, Table, Column, ForeignKey, BelongsTo, DataType, PrimaryKey, HasOne, IsUUID, Default, createIndexDecorator} from 'sequelize-typescript';

import {BaseTables} from './baseTables';
import { UUIDV4 } from 'sequelize';

const CompositeUniquePK = createIndexDecorator({
  name: "BaseDetails_CPK", unique: true
})

@Table({tableName: "baseDetails"})
export class BaseDetails extends Model {

  @PrimaryKey
  @Default(UUIDV4)
  @Column(DataType.UUID)
  baseDetailId!: string;

  @Column(DataType.UUID)
  @ForeignKey(() => BaseTables)
  baseTableId!: string

  @Column(DataType.INTEGER)
  @CompositeUniquePK
  baseTableId1!: number;

  @Column(DataType.INTEGER)
  @CompositeUniquePK
  baseTableId2!: number;

  @Column(DataType.INTEGER)
  @CompositeUniquePK
  baseTableId3!: number;

  @Column(DataType.STRING)
  detailName!: string;

  @BelongsTo(() => BaseTables)
  baseTable!: BaseTables;
}
