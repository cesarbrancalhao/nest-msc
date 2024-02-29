import { Module } from '@nestjs/common';
import { CheckoutsService } from './checkouts.service';
import { CheckoutsController } from './checkouts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Checkout } from './entities/checkout.entity';
import { CheckoutItem } from './entities/checkout-item.entity';
import { CheckoutProduct } from './entities/checkout-product.entity';

@Module({

	imports: [
		
		TypeOrmModule.forFeature([ /* Creates repositories for the entity */
			Checkout, CheckoutItem, CheckoutProduct
		]) 
		
	],
	controllers: [CheckoutsController],
	providers: [CheckoutsService],

})

export class CheckoutsModule {}
