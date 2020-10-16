import { StoreInfoEntity } from './store-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StoreInfoService } from './store-info.service';
import { StoreInfoController } from './store-info.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StoreInfoEntity])],
  providers: [StoreInfoService],
  controllers: [StoreInfoController],
})
export class StoreInfoModule {}
