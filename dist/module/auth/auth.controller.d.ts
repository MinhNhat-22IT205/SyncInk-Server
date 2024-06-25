import { AuthService } from './auth.service';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { EndUserEntity } from '../users/enduser/entities/enduser.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<AuthEntity>;
    signup(registerDto: RegisterDto): Promise<EndUserEntity>;
}
