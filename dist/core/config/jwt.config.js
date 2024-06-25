"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_CONFIG_OPTIONS = void 0;
exports.JWT_CONFIG_OPTIONS = {
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '5m' },
};
//# sourceMappingURL=jwt.config.js.map