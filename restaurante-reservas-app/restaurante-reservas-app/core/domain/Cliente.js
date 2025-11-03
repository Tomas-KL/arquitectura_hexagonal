class Cliente {
  constructor(id, nombre, email, telefono) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
  }

  actualizarDatos(nuevosDatos) {
    Object.assign(this, nuevosDatos);
  }
}
