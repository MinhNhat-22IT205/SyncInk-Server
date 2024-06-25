import { Strategy } from 'passport-jwt';
import { EndUserService } from 'src/module/users/enduser/enduser.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private EndUserService;
    constructor(EndUserService: EndUserService);
    validate(payload: {
        userId: number;
    }): Promise<string>;
}
export {};
