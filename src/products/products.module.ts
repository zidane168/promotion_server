import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PaginationService } from 'src/ultis/http/pagination/pagination.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, PaginationService],
  imports: [
    
  ]
})
export class ProductsModule {}
