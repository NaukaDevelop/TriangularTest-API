import { StoreInfoEntity } from './store-info.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  StoreInfoActiveDTO,
  StoreInfoDTO,
  StoreInfoFullDTO,
} from './store-info.dto';
import { storeInfoFindByFilterFunction } from './store-info-query/store-info-find-by-filter';

@Injectable()
export class StoreInfoService {
  constructor(
    @InjectRepository(StoreInfoEntity)
    private storeInfoRepository: Repository<StoreInfoEntity>,
  ) {}

  async showAll() {
    return await this.storeInfoRepository.find();
  }

  async create(data: StoreInfoDTO) {
    try {
      const store = await this.storeInfoRepository.create(data);
      await this.storeInfoRepository.save(store);
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

  async read(storeInfoId: string) {
    return await this.storeInfoRepository.findOne({
      where: { storeInfoId },
    });
  }

  async update(storeInfoId: string, data: Partial<StoreInfoDTO>) {
    const store = await this.storeInfoRepository.findOne({
      where: { storeInfoId },
    });
    if (!store) {
      throw new HttpException('Registro no existe', HttpStatus.BAD_REQUEST);
    }
    await this.storeInfoRepository.update(storeInfoId, data);
    return await this.storeInfoRepository.findOne({
      where: { storeInfoId },
    });
  }

  async destroy(storeInfoId: string) {
    const store = await this.storeInfoRepository.findOne({
      where: { storeInfoId },
    });
    if (!store) {
      throw new HttpException('Registro no existe', HttpStatus.BAD_REQUEST);
    }
    await this.storeInfoRepository.delete(storeInfoId);
    return { deleted: true };
  }

  async active(storeInfoId: string, data: StoreInfoActiveDTO) {
    const store = await this.storeInfoRepository.findOne({
      where: { storeInfoId },
    });
    if (!store) {
      throw new HttpException('Registro no existe', HttpStatus.BAD_REQUEST);
    }
    await this.storeInfoRepository.update(storeInfoId, data);
    return await this.storeInfoRepository.findOne({
      where: { storeInfoId },
    });
  }

  async findByFilter(data: StoreInfoFullDTO) {
    return await storeInfoFindByFilterFunction(data);
  }
}
