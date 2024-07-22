import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: {
        userId: string;
    }): Promise<import("../../users/enduser/entities/enduser.entity").EndUserMinimal>;
}
export {};
