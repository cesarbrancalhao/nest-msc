import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutController } from './checkout/checkout.controller';
import { CheckoutsModule } from './checkouts/checkouts.module';

/* Decorator */
@Module({ 
  imports: [CheckoutsModule],
  controllers: [AppController, CheckoutController], /* MVC structure */
  providers: [AppService], 
})
export class AppModule {} /* Root module */
