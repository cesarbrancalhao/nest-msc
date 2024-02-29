import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class CheckoutProduct {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image_url: string;

    @Column()
    product_id: number; /* Product ID from another microservice */

}