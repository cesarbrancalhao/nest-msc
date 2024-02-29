import { Injectable } from '@nestjs/common';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { UpdateCheckoutDto } from './dto/update-checkout.dto';
import PRODUCTS_LIST from 'constants/products-list';
import { Checkout } from './entities/checkout.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CheckoutsService {

	constructor(
		@InjectRepository(Checkout) private checkoutRepo: Repository<Checkout>
	) {}

	async create(createCheckoutDto: CreateCheckoutDto) {

		const productIds = createCheckoutDto.items.map(item => item.product_id);
		const products = PRODUCTS_LIST.filter(product => 
			productIds.includes(product.id),
		);

		const checkout = Checkout.create({

			items: createCheckoutDto.items.map(item => {
				const product = products.find(p => p.id === item.product_id);

				return {

					quantity: item.quantity,
					price: product.price,
					product: 
					{
						name: product.name,
						description: product.description,
						image_url: product.image_url,
						product_id: product.id
					}

				};

			}),

		});

		await this.checkoutRepo.save(checkout);
		return checkout;

	}

	findAll() {
		return this.checkoutRepo.find();
	}

	findOne(id: number) {
		return this.checkoutRepo.findOneByOrFail({
			id,
		});
	}

	update(id: number, updateCheckoutDto: UpdateCheckoutDto) {
		return `This action updates a #${id} checkout`;
	}

	remove(id: number) {
		return `This action removes a #${id} checkout`;
	}
}
