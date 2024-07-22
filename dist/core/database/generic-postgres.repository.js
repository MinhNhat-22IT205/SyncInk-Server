"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericRepository = void 0;
class GenericRepository {
    constructor(prismaClient, modelName) {
        this.prismaClient = prismaClient;
        this.modelName = modelName;
    }
    async findMany(options) {
        return this.prismaClient[this.modelName].findMany(options);
    }
    async findById(id) {
        return this.prismaClient[this.modelName].findUnique({
            where: { id },
        });
    }
    async findOne(options) {
        return this.prismaClient[this.modelName].findUnique(options);
    }
    async update(args) {
        return this.prismaClient[this.modelName].update(args);
    }
    async delete(id) {
        return this.prismaClient[this.modelName].delete({ where: { id } });
    }
    async create(data) {
        return this.prismaClient[this.modelName].create({ data });
    }
}
exports.GenericRepository = GenericRepository;
//# sourceMappingURL=generic-postgres.repository.js.map