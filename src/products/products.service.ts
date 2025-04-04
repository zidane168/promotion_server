import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, products } from '@prisma/client';

@Injectable()
export class ProductsService {

  constructor(
    private readonly prisma: PrismaService
  ) {  }

  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }

  async findAll( params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.productsWhereUniqueInput;
    where?: Prisma.productsWhereInput;
    orderBy?: Prisma.productsOrderByWithRelationInput;
  }) : Promise<products[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.products.findMany({
      skip,
      take, 
      cursor,
      where,
      orderBy
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
