const path = require('path');
const db = require(path.resolve(__dirname, '../../../../src/infrastructure/database')).models;

/**
 * MesaSqlRepository: implementa acceso SQL para mesas usando el modelo Mesa de Sequelize.
 */
class MesaSqlRepository {
  constructor() {
    this.Mesa = db.Mesa;
  }

  async create(data) {
    const m = await this.Mesa.create(data);
    return m.toJSON();
  }

  async findById(id) {
    const m = await this.Mesa.findByPk(id);
    return m ? m.toJSON() : null;
  }

  async findAll() {
    const list = await this.Mesa.findAll({ order: [['numero','ASC']] });
    return list.map(x => x.toJSON());
  }

  async update(id, data) {
    const m = await this.Mesa.findByPk(id);
    if (!m) return null;
    await m.update(data);
    return m.toJSON();
  }

  async delete(id) {
    const m = await this.Mesa.findByPk(id);
    if (!m) return false;
    await m.destroy();
    return true;
  }
}

module.exports = MesaSqlRepository;
