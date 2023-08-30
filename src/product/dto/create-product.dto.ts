import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  image: string;

  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;
}
