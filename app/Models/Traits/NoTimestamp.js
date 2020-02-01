const Model = use('Model');

class NoTimestamp extends Model {
  register() {
    Object.defineProperties(this, {
      createdAtColumn: {
        get: () => null,
      },
      updatedAtColumn: {
        get: () => null,
      },
    });
  }
}

module.exports = NoTimestamp;
