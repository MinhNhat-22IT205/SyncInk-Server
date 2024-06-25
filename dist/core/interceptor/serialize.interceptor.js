"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeInterceptor = void 0;
exports.SerializeWithEndUserInterceptor = SerializeWithEndUserInterceptor;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const class_transformer_1 = require("class-transformer");
const enduser_entity_1 = require("../../module/users/enduser/entities/enduser.entity");
function SerializeWithEndUserInterceptor(dto) {
    return (0, common_1.UseInterceptors)(new SerializeInterceptor(dto));
}
class SerializeInterceptor {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => {
            if (data.endUser) {
                data.endUser = (0, class_transformer_1.plainToInstance)(enduser_entity_1.EndUserEntity, data.endUser, {
                    excludeExtraneousValues: true,
                });
            }
            const resultObject = (0, class_transformer_1.plainToInstance)(this.dto, data, {
                excludeExtraneousValues: true,
            });
            return resultObject;
        }));
    }
}
exports.SerializeInterceptor = SerializeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map