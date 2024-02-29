import { 
    Column, 
    Entity, 
    ManyToOne, 
    PrimaryGeneratedColumn
} from "typeorm";

import { Checkout } from "./checkout.entity";
import { CheckoutProduct } from "./checkout-product.entity";

@Entity()
export class CheckoutItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column(/*{ type: 'decimal', precision: 5, scale: 2 }*/)
    price: number;

    @ManyToOne(() => Checkout)
    checkout: Checkout;

    @ManyToOne(() => CheckoutProduct)
    product: CheckoutProduct;

}