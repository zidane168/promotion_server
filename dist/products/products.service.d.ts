import { PrismaService } from 'src/database/prisma.service';
import { Prisma, products } from '@prisma/client';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.productsWhereUniqueInput;
        where?: Prisma.productsWhereInput;
        orderBy?: Prisma.productsOrderByWithRelationInput;
    }): Promise<products[]>;
}
