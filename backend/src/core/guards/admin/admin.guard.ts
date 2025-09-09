import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import * as jwt from "jsonwebtoken";

interface RequestWithCookies extends Request {
  cookies: Record<string, string>;
}

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithCookies>();

    const token =
      request.cookies?.coruno_accessToken ||
      request.headers["authorization"]?.replace("Bearer ", "");

    if (!token) {
      throw new UnauthorizedException("No token provided");
    }

    try {
      const payload: any = jwt.verify(
        token,
        process.env.JWT_SECRET || "secret"
      );

      if (payload.appRole !== 1) {
        throw new ForbiddenException("Insufficient permissions");
      }

      request["user"] = payload;

      return true;
    } catch (err) {
      throw new UnauthorizedException("Invalid token");
    }
  }
}
