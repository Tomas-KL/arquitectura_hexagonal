import jwt from "jsonwebtoken";
class JwtAuthService {
  generarToken(usuario) {
    return jwt.sign({ id: usuario.id }, process.env.JWT_SECRET);
  }
}
