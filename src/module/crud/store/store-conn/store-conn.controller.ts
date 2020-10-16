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
  StoreConnActiveDTO,
  StoreConnDTO,
  StoreConnFullDTO,
} from './store-conn.dto';
import { StoreConnService } from './store-conn.service';

@ApiTags('store-conn')
@Controller('store-conn')
export class StoreConnController {
  constructor(private storeConnService: StoreConnService) {}

  @Get()
  showAll() {
    return this.storeConnService.showAll();
  }

  @Get(':storeConnId')
  @UsePipes(new ValidationPipe())
  read(@Param('storeConnId') storeConnId: string) {
    return this.storeConnService.read(storeConnId);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() data: StoreConnDTO) {
    return this.storeConnService.create(data);
  }

  @Post('findByFilter')
  @UsePipes(new ValidationPipe())
  findByFilter(@Body() data: StoreConnFullDTO) {
    return this.storeConnService.findByFilter(data);
  }

  @Patch(':storeConnId')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: StoreConnDTO })
  update(
    @Param('storeConnId') storeConnId: string,
    @Body() data: Partial<StoreConnDTO>,
  ) {
    return this.storeConnService.update(storeConnId, data);
  }

  @Patch('active/:storeConnId')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: StoreConnActiveDTO })
  active(
    @Param('storeConnId') storeConnId: string,
    @Body() data: StoreConnActiveDTO,
  ) {
    return this.storeConnService.active(storeConnId, data);
  }

  @Delete(':storeConnId')
  @UsePipes(new ValidationPipe())
  destroy(@Param('storeConnId') storeConnId: string) {
    return this.storeConnService.destroy(storeConnId);
  }
}
