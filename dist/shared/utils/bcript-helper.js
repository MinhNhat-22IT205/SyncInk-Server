"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToHashedPassword = exports.isMatchedPassword = exports.roundsOfHashing = void 0;
const bcrypt = require("bcrypt");
exports.roundsOfHashing = 10;
const isMatchedPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};
exports.isMatchedPassword = isMatchedPassword;
const convertToHashedPassword = async (password) => {
    return await bcrypt.hash(password, exports.roundsOfHashing);
};
exports.convertToHashedPassword = convertToHashedPassword;
//# sourceMappingURL=bcript-helper.js.map