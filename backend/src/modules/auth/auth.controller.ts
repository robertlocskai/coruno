import {
  Body,
  Controller,
  forwardRef,
  HttpCode,
  Inject,
  Post,
  Res,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { LoginRequestDto } from "./dtos/login.request.dto";
import { AuthService } from "./auth.service";
import { AdminGuard } from "src/core/guards/admin/admin.guard";
import { LoginResponseDto } from "./dtos/login.response.dto";
import { CreateRequestDto } from "./dtos/create.request.dto";

@Controller("auth")
export class AuthController {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService
  ) {}

  @Post("login")
  @HttpCode(200)
  public async login(
    @Body() body: LoginRequestDto,
    @Res() res
  ): Promise<LoginResponseDto> {
    try {
      const user = await this.authService.validateUser(body);
      const token = await this.authService.generateToken(user);

      res.cookie("coruno_accessToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 3600 * 1000,
      });

      return res.json({
        ...user,
        password: undefined,
        refreshToken: undefined,
      });
    } catch (err) {
      if (err instanceof UnauthorizedException) {
        return res.status(401).json({ message: err.message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  @Post("create")
  @UseGuards(AdminGuard)
  public async create(@Body() body: CreateRequestDto) {
    return await this.authService.createUser(body);
  }
}
