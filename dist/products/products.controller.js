"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const swagger_1 = require("@nestjs/swagger");
const pagination_service_1 = require("../ultis/http/pagination/pagination.service");
let ProductsController = class ProductsController {
    constructor(productsService, paginationService) {
        this.productsService = productsService;
        this.paginationService = paginationService;
    }
    async findAll(page, limit, condition, categoryId) {
        const pageNumber = parseInt(page) || 1;
        const limitNumber = parseInt(limit) || 10;
        let categoryIdNumber = 1;
        if (categoryId) {
            categoryIdNumber = parseInt(categoryId) || 1;
        }
        const skip = (limitNumber * (pageNumber - 1));
        const take = limitNumber;
        const where = {
            ...(categoryId && { categoryId: categoryIdNumber }),
            ...(condition && {
                OR: [
                    {
                        description: {
                            contains: condition
                        },
                    },
                    {
                        title: {
                            contains: condition
                        },
                    },
                ],
            })
        };
        const params = {
            skip,
            take,
            ...(where && { where }),
            orderBy: { id: 'desc' }
        };
        const { count, items } = await this.productsService.findAll(params);
        const totalPage = this.paginationService.totalPage(count, limitNumber);
        return {
            _pagination: { count, totalPage },
            data: items,
        };
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Page number for pagination' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Number of items to return per page' }),
    (0, swagger_1.ApiQuery)({ name: 'condition', required: false, type: String, description: 'Condition to filter results' }),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, type: String, description: 'CategoryId to filter results' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('condition')),
    __param(3, (0, common_1.Query)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        pagination_service_1.PaginationService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map