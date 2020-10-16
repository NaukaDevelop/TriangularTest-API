import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StoreConnService } from './store-conn.service';
import { StoreConnController } from './store-conn.controller';
import { StoreConnEntity } from './store-conn.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreConnEntity])],
  providers: [StoreConnService],
  controllers: [StoreConnController],
})
export class StoreConnModule {}
