class Mesa {
  constructor(id, numero, capacidad) {
    this.id = id;
    this.numero = numero;
    this.capacidad = capacidad;
    this.ocupada = false;
  }

  ocupar() { this.ocupada = true; }
  liberar() { this.ocupada = false; }
}
