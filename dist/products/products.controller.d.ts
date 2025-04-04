import { ProductsService } from './products.service';
import { products } from '@prisma/client';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(page: string, limit: string, condition?: string): Promise<products[]>;
}
