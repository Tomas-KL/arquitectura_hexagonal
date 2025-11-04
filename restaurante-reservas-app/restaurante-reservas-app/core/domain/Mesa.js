module.exports = (sequelize, DataTypes) => {
  const Mesa = sequelize.define('Mesa', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 4
    },
    ubicacion: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'mesas'
  });

  return Mesa;
};
