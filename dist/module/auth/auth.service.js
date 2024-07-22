"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_repository_1 = require("./repository/auth.repository");
const bcript_helper_1 = require("../../shared/utils/bcript-helper");
let AuthService = class AuthService {
    constructor(authRepository, jwtService) {
        this.authRepository = authRepository;
        this.jwtService = jwtService;
    }
    async getEndUserByEmail(email) {
        return this.authRepository.findOne({
            where: { email },
        });
    }
    async getEndUserMinimalById(endUserId) {
        return this.authRepository.findOne({
            where: { id: endUserId },
            select: { id: true, username: true, email: true, description: true, avatar: true },
        });
    }
    async login({ email, password }) {
        const user = await this.getEndUserByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException(`No user found for email: ${email}`);
        }
        const isPasswordValid = (0, bcript_helper_1.isMatchedPassword)(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid password');
        }
        const accessToken = this.jwtService.sign({ userId: user.id });
        console.log(accessToken);
        return {
            endUser: user,
            accessToken,
        };
    }
    async register(registerEndUserDto) {
        const hashedPassword = await (0, bcript_helper_1.convertToHashedPassword)(registerEndUserDto.password);
        const user = await this.authRepository.create({
            ...registerEndUserDto,
            password: hashedPassword,
        });
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map