import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service'; 
import { products } from '@prisma/client';
import { ApiQuery } from '@nestjs/swagger';
import { PaginationService } from 'src/ultis/http/pagination/pagination.service';
import { IResponsePaging } from 'src/ultis/http/response/interfaces/reponse.interface';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly paginationService: PaginationService,
  ) {}

  // @Post()
  // create(@Body() createProductDto: CreateProductDto) {
  //   return this.productsService.create(createProductDto);
  // }

  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number for pagination' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Number of items to return per page' })
  @ApiQuery({ name: 'condition', required: false, type: String, description: 'Condition to filter results' })
  @ApiQuery({ name: 'categoryId', required: false, type: String, description: 'CategoryId to filter results' })
  @Get( )
  async findAll(    
    @Query('page') page: string, 
    @Query('limit') limit: string,
    @Query('condition') condition?: string,
    @Query('categoryId') categoryId?: string
  ): Promise<IResponsePaging> { 

    const pageNumber  = parseInt(page) || 1
    const limitNumber  = parseInt(limit) || 10

    let  categoryIdNumber = 1
    if (categoryId) {
      categoryIdNumber = parseInt(categoryId) || 1 
    }
    
    const skip = (limitNumber * (pageNumber - 1));
    const take = limitNumber;
    const where: any =  { 
      ...(categoryId && { categoryId : categoryIdNumber } ),
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
    }

    const params: any = {
      skip, 
      take,  
      ...(where && { where }), 
      orderBy: { id: 'desc' }       
    }

    const { count, items }: { count: number, items: products[] } =  await this.productsService.findAll( params );
    const totalPage: number = this.paginationService.totalPage(count, limitNumber)

    return {
      _pagination: { count, totalPage },
      data: items,
    } 
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}

