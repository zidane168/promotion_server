import { HttpStatus } from '@nestjs/common';
export type IMessageOptionsProperties = Record<string, string | any>;
export interface IResponsePagingPagination {
    totalPage: number;
    count: number;
}
export interface IResponsePaging {
    _metadata?: IResponseMetadata;
    _pagination: IResponsePagingPagination;
    data: Record<string, any>[];
}
export interface IResponseCustomPropertyMetadata {
    statusCode?: number;
    message?: string;
    httpStatus?: HttpStatus;
    messageProperties?: IMessageOptionsProperties;
}
export interface IResponseMetadata {
    customProperty?: IResponseCustomPropertyMetadata;
    [key: string]: any;
}
