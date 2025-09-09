import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { LoginRequestDto } from "./dtos/login.request.dto";
import { Repository } from "typeorm";
import { User } from "src/models/User";
import { InjectRepository } from "@nestjs/typeorm";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  public async validateUser(body: LoginRequestDto) {
    const user = await this.userRepository.findOneBy({ email: body.email });
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const passwordMatches = await bcrypt.compare(body.password, user.password);
    if (!passwordMatches)
      throw new UnauthorizedException("Invalid credentials");

    return user;
  }

  public generateToken(user: User) {
    const payload = { sub: user.id, email: user.email, appRole: user.appRole };
    return jwt.sign(payload, process.env.JWT_SECRET || "secret", {
      expiresIn: "1h",
    });
  }

  public async createUser(body) {
    const userExists = await this.userRepository.findOneBy({
      email: body.email,
    });

    if (userExists)
      throw new ConflictException(
        "A user already exists with this E-mail address!"
      );

    const password = await bcrypt.hash(body.password, 10);

    const user = this.userRepository.create({ ...body, password: password });

    return await this.userRepository.save(user);
  }
}
