import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly weight: number;
}
