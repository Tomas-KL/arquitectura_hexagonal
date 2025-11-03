class ClienteService {
  constructor(clienteRepo, authService) {
    this.clienteRepo = clienteRepo;
    this.authService = authService;
  }

  async autenticar(credenciales) {
    const token = this.authService.generarToken(credenciales);
    return { token };
  }
}
