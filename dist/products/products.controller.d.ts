import { ProductsService } from './products.service';
import { Products } from '@prisma/client';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(page: number, limit: number, condition: string): Promise<Products[]>;
    findOne(id: string): string;
}
