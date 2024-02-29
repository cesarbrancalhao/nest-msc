import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn
} from "typeorm";

import { CheckoutProduct } from "./checkout-product.entity";
import { CheckoutItem } from "./checkout-item.entity";

export type CreateCheckoutCommand = {

    items: {

        quantity: number;
        price: number;
        product: 
        {
            name: string;
            description: string;
            image_url: string;
            product_id: number;
        };

    }[];

};

export enum CheckoutStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
}

@Entity()
export class Checkout {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    total: number;

    @Column()
    status: CheckoutStatus = CheckoutStatus.PENDING;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => CheckoutItem, item => item.checkout, {
        cascade: ['insert'],
    })
    items: CheckoutItem[];

    static create(input: CreateCheckoutCommand) {
        
        const checkout = new Checkout();
        checkout.items = input.items.map(item => {

            const checkoutItem = new CheckoutItem();
            checkoutItem.quantity = item.quantity;
            checkoutItem.price = item.price;
            checkoutItem.product = new CheckoutProduct();
            checkoutItem.product.name = item.product.name;
            checkoutItem.product.description = item.product.description;
            checkoutItem.product.image_url = item.product.image_url;
            checkoutItem.product.product_id = item.product.product_id;
            return checkoutItem;

        });

        checkout.total = checkout.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);

        return checkout;

    }

}