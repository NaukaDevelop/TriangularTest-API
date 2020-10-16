import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('StoreConn')
export class StoreConnEntity {
  @PrimaryColumn()
  storeConnId: string;

  @Column('text')
  storeConnChk: string;

  @Column('text')
  storeConnSts: string;

  @CreateDateColumn({ type: 'date' })
  storeConnCreated: Date;

  @UpdateDateColumn({ type: 'date' })
  storeConnUpdated: Date;

  @Column('text')
  storeConnStoreId: string;

  @Column('text')
  storeConnName: string;

  @Column('text')
  storeConnIpAddress: string;

  @Column('text')
  storeConnUser: string;

  @Column('text')
  storeConnPassword: string;

  @Column('text')
  storeConnStoreDatabase: string;

  @Column('text')
  storeConnPort: string;

  @BeforeInsert()
  setPrimaryKey() {
    this.storeConnId = `${this.storeConnStoreId}`;
  }
}
