import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { storeConnFindByFilterFunction } from './store-conn-query/store-conn-find-by-filter';
import {
  StoreConnActiveDTO,
  StoreConnDTO,
  StoreConnFullDTO,
} from './store-conn.dto';
import { StoreConnEntity } from './store-conn.entity';

@Injectable()
export class StoreConnService {
  constructor(
    @InjectRepository(StoreConnEntity)
    private storeConnRepository: Repository<StoreConnEntity>,
  ) {}

  async showAll() {
    return await this.storeConnRepository.find();
  }

  async create(data: StoreConnDTO) {
    try {
      const store = await this.storeConnRepository.create(data);
      await this.storeConnRepository.save(store);
      return store;
    } catch (error) {
      if (error.errno === 1062) {
        throw new HttpException(
          'Registro ya existe',
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
    }
  }

  async read(storeConnId: string) {
    return await this.storeConnRepository.findOne({
      where: { storeConnId },
    });
  }

  async update(storeConnId: string, data: Partial<StoreConnDTO>) {
    const store = await this.storeConnRepository.findOne({
      where: { storeConnId },
    });
    if (!store) {
      throw new HttpException('Registro no existe', HttpStatus.BAD_REQUEST);
    }
    await this.storeConnRepository.update(storeConnId, data);
    return await this.storeConnRepository.findOne({
      where: { storeConnId },
    });
  }

  async active(storeConnId: string, data: StoreConnActiveDTO) {
    const store = await this.storeConnRepository.findOne({
      where: { storeConnId },
    });
    if (!store) {
      throw new HttpException('Registro no existe', HttpStatus.BAD_REQUEST);
    }
    await this.storeConnRepository.update(storeConnId, data);
    return await this.storeConnRepository.findOne({
      where: { storeConnId },
    });
  }

  async destroy(storeConnId: string) {
    const store = await this.storeConnRepository.findOne({
      where: { storeConnId },
    });
    if (!store) {
      throw new HttpException('Registro no existe', HttpStatus.BAD_REQUEST);
    }
    await this.storeConnRepository.delete(storeConnId);
    return { deleted: true };
  }

  async findByFilter(data: StoreConnFullDTO) {
    return await storeConnFindByFilterFunction(data);
  }
}
