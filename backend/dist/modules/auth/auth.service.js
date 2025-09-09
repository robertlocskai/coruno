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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const User_1 = require("../../models/User");
const typeorm_2 = require("@nestjs/typeorm");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async validateUser(body) {
        const user = await this.userRepository.findOneBy({ email: body.email });
        if (!user) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        const passwordMatches = await bcrypt.compare(body.password, user.password);
        if (!passwordMatches)
            throw new common_1.UnauthorizedException("Invalid credentials");
        return user;
    }
    generateToken(user) {
        const payload = { sub: user.id, email: user.email, appRole: user.appRole };
        return jwt.sign(payload, process.env.JWT_SECRET || "secret", {
            expiresIn: "1h",
        });
    }
    async createUser(body) {
        const userExists = await this.userRepository.findOneBy({
            email: body.email,
        });
        if (userExists)
            throw new common_1.ConflictException("A user already exists with this E-mail address!");
        const password = await bcrypt.hash(body.password, 10);
        const user = this.userRepository.create({ ...body, password: password });
        return await this.userRepository.save(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(User_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map