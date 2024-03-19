import { IsString, IsNumber, IsDate } from 'class-validator';

class Product {
  @IsString()
  readonly guid: string;

  @IsString()
  readonly title: string;

  @IsNumber()
  readonly weight: number;
}

export class CreateAuctionDto {
  @IsNumber()
  readonly interval: number;

  @IsDate()
  readonly optOut: Date | string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(1)
  @Type(() => Product)
  readonly products: Array<Product>;
}
