import { ProductsService } from './products.service';
import { PaginationService } from 'src/ultis/http/pagination/pagination.service';
import { IResponsePaging } from 'src/ultis/http/response/interfaces/reponse.interface';
export declare class ProductsController {
    private readonly productsService;
    private readonly paginationService;
    constructor(productsService: ProductsService, paginationService: PaginationService);
    findAll(page: string, limit: string, condition?: string, categoryId?: string): Promise<IResponsePaging>;
}
