import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CheckoutsService } from './checkouts.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';

@Controller('checkouts')
export class CheckoutsController {

	constructor(private readonly checkoutsService: CheckoutsService) {}

	@Post()
	create(@Body() createCheckoutDto: CreateCheckoutDto) {
		return this.checkoutsService.create(createCheckoutDto);
	}

	@Get()
	findAll() {
		return this.checkoutsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.checkoutsService.findOne(+id);
	}

	@Put(':id/pay')
	pay(@Param('id') id: string) {
		return this.checkoutsService.pay(+id);
	}

	@Put(':id/cancel')
	cancel(@Param('id') id: string) {
		return this.checkoutsService.cancel(+id);
	}

}