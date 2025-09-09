import { LoginRequestDto } from "./dtos/login.request.dto";
import { Repository } from "typeorm";
import { User } from "src/models/User";
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validateUser(body: LoginRequestDto): Promise<User>;
    generateToken(user: User): any;
    createUser(body: any): Promise<User[]>;
}
