import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutsModule } from './checkouts/checkouts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Checkout } from './checkouts/entities/checkout.entity';
import { CheckoutItem } from './checkouts/entities/checkout-item.entity';
import { CheckoutProduct } from './checkouts/entities/checkout-product.entity';

/* Decorator */
@Module({ 
  
	imports: [

		TypeOrmModule.forRoot({

		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: 'root',
		password: 'root',
		database: 'nest',
		entities: [Checkout, CheckoutItem, CheckoutProduct],
		synchronize: true,
		logging: true,

		}),
		CheckoutsModule

	],
	controllers: [AppController], /* MVC structure */
	providers: [AppService], 

})

export class AppModule {} /* Root module */
