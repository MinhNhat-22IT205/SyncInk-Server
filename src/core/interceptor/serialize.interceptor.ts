import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';

interface ClassConstructor {
  endUser?: any;
  new (...args: any[]): {};
}

export function SerializeWithEndUserInterceptor(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: ClassConstructor) => {
        if (data.endUser) {
          // If the response contains an 'endUser' property, transform it using the DTO
          data.endUser = plainToInstance(EndUserEntity, data.endUser, {
            excludeExtraneousValues: true,
          });
        }
        const resultObject = plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });

        return resultObject;
      }),
    );
  }
}
