import {
  Body,
  Controller,
  Delete,
  Get,
  Put,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UsePipes, ValidationPipe, SetMetadata,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';


@Controller('coffees')
export class CoffeesController {

  constructor(private readonly coffeeService: CoffeesService) {}

  @SetMetadata('isPublic', true)
  @UsePipes(new ValidationPipe())
  @Get('flavors')
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeeService.findAll(paginationQuery)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id)
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id)
  }
}
