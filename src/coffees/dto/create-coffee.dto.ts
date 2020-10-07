import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'name of the coffee' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'type of the brand' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: [] })
  @IsString({ each: true })
  readonly flavors: string[];
}
