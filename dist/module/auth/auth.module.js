"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const auth_repository_1 = require("./repository/auth.repository");
const jwt_config_1 = require("../../core/config/jwt.config");
const enduser_module_1 = require("../users/enduser/enduser.module");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const enduser_service_1 = require("../users/enduser/enduser.service");
const enduser_repository_1 = require("../users/enduser/repository/enduser.repository");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, passport_1.PassportModule, enduser_module_1.EndUserModule, jwt_1.JwtModule.register(jwt_config_1.JWT_CONFIG_OPTIONS)],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, auth_repository_1.AuthRepository, enduser_service_1.EndUserService, enduser_repository_1.EndUserRepository, jwt_strategy_1.JwtStrategy],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map