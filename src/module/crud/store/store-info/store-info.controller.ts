import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import {
  StoreInfoActiveDTO,
  StoreInfoDTO,
  StoreInfoFullDTO,
} from './store-info.dto';
import { StoreInfoService } from './store-info.service';

@ApiTags('store-info')
@Controller('store-info')
export class StoreInfoController {
  constructor(private storeInfoService: StoreInfoService) {}

  @Get()
  showAll() {
    return this.storeInfoService.showAll();
  }

  @Get(':storeInfoId')
  @UsePipes(new ValidationPipe())
  read(@Param('storeInfoId') storeInfoId: string) {
    return this.storeInfoService.read(storeInfoId);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() data: StoreInfoDTO) {
    return this.storeInfoService.create(data);
  }

  @Post('findByFilter')
  @UsePipes(new ValidationPipe())
  findByFilter(@Body() data: StoreInfoFullDTO) {
    return this.storeInfoService.findByFilter(data);
  }

  @Patch(':storeInfoId')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: StoreInfoDTO })
  update(
    @Param('storeInfoId') storeInfoId: string,
    @Body() data: Partial<StoreInfoDTO>,
  ) {
    return this.storeInfoService.update(storeInfoId, data);
  }

  @Patch('active/:storeInfoId')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: StoreInfoActiveDTO })
  active(
    @Param('storeInfoId') storeInfoId: string,
    @Body() data: StoreInfoActiveDTO,
  ) {
    return this.storeInfoService.active(storeInfoId, data);
  }

  @Delete(':storeInfoId')
  @UsePipes(new ValidationPipe())
  destroy(@Param('storeInfoId') storeInfoId: string) {
    return this.storeInfoService.destroy(storeInfoId);
  }
}
