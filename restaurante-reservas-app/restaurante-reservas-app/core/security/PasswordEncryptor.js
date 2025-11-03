import bcrypt from "bcrypt";

export const PasswordEncryptor = {
  encriptar: async (clave) => await bcrypt.hash(clave, 10),
  comparar: async (clave, hash) => await bcrypt.compare(clave, hash)
};
