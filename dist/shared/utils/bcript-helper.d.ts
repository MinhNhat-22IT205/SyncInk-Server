export declare const roundsOfHashing = 10;
export declare const isMatchedPassword: (password: string, hashedPassword: string) => Promise<boolean>;
export declare const convertToHashedPassword: (password: string) => Promise<string>;
