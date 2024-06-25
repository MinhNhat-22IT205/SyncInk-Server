import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import { AuthRepository } from './repository/auth.repository';
import { RegisterDto } from './dto/register.dto';
import { EndUserEntity } from '../users/enduser/entities/enduser.entity';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private authRepository;
    private jwtService;
    constructor(authRepository: AuthRepository, jwtService: JwtService);
    login({ email, password }: LoginDto): Promise<AuthEntity>;
    register(registerEndUserDto: RegisterDto): Promise<EndUserEntity>;
}
