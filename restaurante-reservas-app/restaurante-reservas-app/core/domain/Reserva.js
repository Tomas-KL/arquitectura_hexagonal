module.exports = (sequelize, DataTypes) => {
  const Reserva = sequelize.define('Reserva', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    fechaHoraInicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fechaHoraFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('PENDIENTE','CONFIRMADA','CANCELADA','COMPLETADA'),
      defaultValue: 'PENDIENTE'
    },
    clienteId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    mesaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notas: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'reservas'
  });

  return Reserva;
};
