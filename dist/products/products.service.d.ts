import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Products } from '@prisma/client';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): string;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProductsWhereUniqueInput;
        where?: Prisma.ProductsWhereInput;
        orderBy?: Prisma.ProductsOrderByWithRelationInput;
    }): Promise<Products[]>;
    findOne(id: number): string;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
