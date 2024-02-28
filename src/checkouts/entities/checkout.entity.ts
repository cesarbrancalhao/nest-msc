import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

}

@Entity()
export class CheckoutProduct {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image_url: number;

    @Column()
    product_id: number; /* Product ID from another microservice */

}

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