class ClienteNoSqlRepository {
  constructor() {
    this.store = new Map();
  }

  async save(cliente) {
    this.store.set(cliente.id, cliente);
    return cliente;
  }

  async findById(id) {
    return this.store.get(id) || null;
  }

  async findAll() {
    return Array.from(this.store.values());
  }

  async delete(id) {
    return this.store.delete(id);
  }
}

module.exports = ClienteNoSqlRepository;
