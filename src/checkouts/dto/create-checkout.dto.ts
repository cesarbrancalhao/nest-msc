import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsPositive, ValidateNested } from "class-validator";

export class CheckoutItemDto {

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    quantity: number;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    product_id: number;

};

export class CreateCheckoutDto {

    @IsNotEmpty()
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    items: CheckoutItemDto[];
    
}
