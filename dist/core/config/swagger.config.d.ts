import { INestApplication } from '@nestjs/common';
export declare const config: Omit<import("@nestjs/swagger").OpenAPIObject, "paths">;
export declare const createSwaggerDocument: (app: INestApplication<any>) => void;
