const crypto = require('crypto');

class EncryptionAdapter {
  constructor() {
    this.algorithm = 'sha256';
  }

  hash(text) {
    return crypto.createHash(this.algorithm).update(String(text)).digest('hex');
  }

  compare(text, hashed) {
    return this.hash(text) === hashed;
  }
}

module.exports = EncryptionAdapter;
