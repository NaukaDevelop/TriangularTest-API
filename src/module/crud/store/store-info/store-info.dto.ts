import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class StoreInfoDTO {
  @ApiPropertyOptional()
  @IsOptional()
  storeInfoNumber: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoName: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoType: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoAddress1: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoCity: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoState: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoArea: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoZip: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoCountry: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoCounty: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoLocale: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoCurrencyId: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoLatitude: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoLongitude: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoPhone: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoDescription: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoManager: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoEmail: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoTax: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoLocType: string;
}

export class StoreInfoFullDTO {
  @ApiPropertyOptional()
  @IsOptional()
  storeInfoId: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoChk: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoSts: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoCreated: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoUpdated: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoNumber: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoName: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoType: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoAddress1: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoCity: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoState: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoArea: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoZip: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoCountry: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoCounty: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoLocale: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoCurrencyId: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoLatitude: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoLongitude: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoPhone: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoDescription: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoManager: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoEmail: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoTax: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeInfoLocType: string;
}

export class StoreInfoActiveDTO {
  @ApiPropertyOptional()
  @IsOptional()
  storeInfoSts: string;
}
