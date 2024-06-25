import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

export const isMatchedPassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const convertToHashedPassword = async (password: string) => {
  return await bcrypt.hash(password, roundsOfHashing);
};
