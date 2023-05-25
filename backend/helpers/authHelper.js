import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10; // more we had saltrounds that much we will have CPU usage...
    const hashedPassword = await bcrypt.hash(password, saltRounds); // getting plain password..
    return hashedPassword;
    console.log(`Hashed Password =>, ${hashedPassword}`);
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};