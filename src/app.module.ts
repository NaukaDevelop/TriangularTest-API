import { StoreInfoModule } from './module/crud/store/store-info/store-info.module';
// Nestjs
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

// Local
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Vendor
import * as dotenv from 'dotenv';
import { HttpErrorFilter } from './shared/http-error.filter';
import { StoreConnModule } from './module/crud/store/store-conn/store-conn.module';
// Shared

dotenv.config();

const myport = parseInt(process.env.DATABASE_PORT);
console.log('myport', myport);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `${process.env.LOCAL_DB_HOST}`,
      port: myport,
      username: `${process.env.LOCAL_DB_USER_WRITE}`,
      password: `${process.env.LOCAL_DB_PASSWORD_WRITE}`,
      database: `${process.env.LOCAL_DB_NAME}`,
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: false,
      synchronize: false,
      dateStrings: true,
      timezone: '-04:00',
    }),
    StoreInfoModule,
    StoreConnModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
