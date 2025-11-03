import jwt from "jsonwebtoken";

class TokenService {
  static generarToken(usuario) {
    return jwt.sign({ id: usuario.id }, process.env.JWT_SECRET);
  }

  static validarToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}
