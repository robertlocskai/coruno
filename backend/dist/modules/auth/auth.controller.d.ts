import { LoginRequestDto } from "./dtos/login.request.dto";
import { AuthService } from "./auth.service";
import { LoginResponseDto } from "./dtos/login.response.dto";
import { CreateRequestDto } from "./dtos/create.request.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginRequestDto, res: any): Promise<LoginResponseDto>;
    create(body: CreateRequestDto): Promise<import("../../models/User").User[]>;
}
