"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseSerializeInterceptor = UseSerializeInterceptor;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
require("reflect-metadata");
function UseSerializeInterceptor(dto) {
    return (0, common_1.UseInterceptors)(new SerializeInterceptor(dto));
}
class SerializeInterceptor {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            if (Array.isArray(data)) {
                return data.map(item => this.transformItem(item, this.dto));
            }
            return this.transformItem(data, this.dto);
        }));
    }
    transformItem(item, dtoClass) {
        for (const key in item) {
            if (this.shouldTransformNestedObject(item, key)) {
                const nestedDtoClass = this.getNestedDtoClass(dtoClass, key);
                if (nestedDtoClass) {
                    item[key] = (0, class_transformer_1.plainToInstance)(nestedDtoClass, item[key], {
                        excludeExtraneousValues: true,
                    });
                }
            }
        }
        return (0, class_transformer_1.plainToInstance)(dtoClass, item, {
            excludeExtraneousValues: true,
        });
    }
    shouldTransformNestedObject(item, key) {
        return typeof item[key] === 'object' && item[key] !== null;
    }
    getNestedDtoClass(dtoClass, key) {
        const metadata = Reflect.getMetadata('design:type', dtoClass.prototype, key);
        return this.isClassConstructor(metadata) ? metadata : null;
    }
    isClassConstructor(metadata) {
        return metadata && metadata.name !== 'Object' && metadata.name !== 'Array';
    }
}
//# sourceMappingURL=serialize.interceptor.js.map