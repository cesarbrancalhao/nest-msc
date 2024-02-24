import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutsModule } from './checkouts/checkouts.module';

/* Decorator */
@Module({ 
  imports: [CheckoutsModule],
  controllers: [AppController], /* MVC structure */
  providers: [AppService], 
})
export class AppModule {} /* Root module */
