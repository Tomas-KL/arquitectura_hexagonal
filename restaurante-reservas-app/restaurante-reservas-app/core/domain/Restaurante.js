class Restaurante {
  constructor(nombre, direccion, mesas = []) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.mesas = mesas;
  }

  obtenerMesasDisponibles() {
    return this.mesas.filter(m => !m.ocupada);
  }
}
