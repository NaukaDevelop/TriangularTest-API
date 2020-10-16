import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class StoreConnDTO {
  @ApiPropertyOptional()
  @IsOptional()
  storeConnStoreId: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnName: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnIpAddress: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnUser: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnPassword: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnStoreDatabase: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnPort: string;
}

export class StoreConnFullDTO {
  @ApiPropertyOptional()
  @IsOptional()
  storeConnId: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnChk: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnSts: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnCreated: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnUpdated: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnStoreId: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnName: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnIpAddress: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnUser: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnPassword: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnStoreDatabase: string;

  @ApiPropertyOptional()
  @IsOptional()
  storeConnPort: string;
}

export class StoreConnActiveDTO {
  @ApiPropertyOptional()
  @IsOptional()
  storeConnSts: string;
}
