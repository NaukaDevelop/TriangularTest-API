import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('StoreInfo')
export class StoreInfoEntity {
  @PrimaryColumn()
  storeInfoId: string;

  @Column('text')
  storeInfoChk: string;

  @Column('text')
  storeInfoSts: string;

  @CreateDateColumn({ type: 'date' })
  storeInfoCreated: Date;

  @UpdateDateColumn({ type: 'date' })
  storeInfoUpdated: Date;

  @Column('text')
  storeInfoNumber: string;

  @Column('text')
  storeInfoName: string;

  @Column('text')
  storeInfoType: string;

  @Column('text')
  storeInfoAddress1: string;

  @Column('text')
  storeInfoCity: string;

  @Column('text')
  storeInfoState: string;

  @Column('text')
  storeInfoArea: string;

  @Column('text')
  storeInfoZip: string;

  @Column('text')
  storeInfoCountry: string;

  @Column('text')
  storeInfoCounty: string;

  @Column('text')
  storeInfoLocale: string;

  @Column('text')
  storeInfoCurrencyId: string;

  @Column('text')
  storeInfoLatitude: string;

  @Column('text')
  storeInfoLongitude: string;

  @Column('text')
  storeInfoPhone: string;

  @Column('text')
  storeInfoDescription: string;

  @Column('text')
  storeInfoManager: string;

  @Column('text')
  storeInfoEmail: string;

  @Column('text')
  storeInfoTax: string;

  @Column('text')
  storeInfoLocType: string;

  @BeforeInsert()
  setPrimaryKey() {
    this.storeInfoId = `${this.storeInfoNumber}`;
  }
}
