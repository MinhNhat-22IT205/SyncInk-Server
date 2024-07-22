import 'reflect-metadata';
interface ClassConstructor {
    new (...args: any[]): object;
}
export declare function UseSerializeInterceptor(dto: ClassConstructor): MethodDecorator & ClassDecorator;
export {};
