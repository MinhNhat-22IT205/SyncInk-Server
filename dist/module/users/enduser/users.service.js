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
exports.EndUserService = void 0;
const common_1 = require("@nestjs/common");
const enduser_repository_1 = require("./repository/enduser.repository");
let EndUserService = class EndUserService {
    constructor(EndUserRepository) {
        this.EndUserRepository = EndUserRepository;
    }
    async create(createUserDto) {
        return this.EndUserRepository.create(createUserDto);
    }
    async findAll() {
        return this.EndUserRepository.findMany({});
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.EndUserService = EndUserService;
exports.EndUserService = EndUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [enduser_repository_1.EndUserRepository])
], EndUserService);
//# sourceMappingURL=users.service.js.map