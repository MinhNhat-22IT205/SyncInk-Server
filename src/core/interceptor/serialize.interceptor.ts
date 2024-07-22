import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';
import 'reflect-metadata';

interface ClassConstructor {
  new (...args: any[]): object;
}

export function UseSerializeInterceptor(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        if (Array.isArray(data)) {
          return data.map(item => this.transformItem(item, this.dto));
        }
        return this.transformItem(data, this.dto);
      }),
    );
  }

  private transformItem(item: any, dtoClass: ClassConstructor): any {
    for (const key in item) {
      if (this.shouldTransformNestedObject(item, key)) {
        const nestedDtoClass = this.getNestedDtoClass(dtoClass, key);
        if (nestedDtoClass) {
          item[key] = plainToInstance(nestedDtoClass, item[key], {
            excludeExtraneousValues: true,
          });
        }
      }
    }
    return plainToInstance(dtoClass, item, {
      excludeExtraneousValues: true,
    });
  }

  private shouldTransformNestedObject(item: any, key: string): boolean {
    return typeof item[key] === 'object' && item[key] !== null;
  }

  private getNestedDtoClass(dtoClass: ClassConstructor, key: string): ClassConstructor | null {
    const metadata = Reflect.getMetadata('design:type', dtoClass.prototype, key);
    return this.isClassConstructor(metadata) ? metadata : null;
  }

  private isClassConstructor(metadata: any): metadata is ClassConstructor {
    //check if name of the metadata is 'SthEntity' not 'Object' or 'Array'
    return metadata && metadata.name !== 'Object' && metadata.name !== 'Array';
  }
}
