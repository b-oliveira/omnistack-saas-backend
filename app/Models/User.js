const Model = use('Model');
const Hash = use('Hash');

class User extends Model {
  static boot() {
    super.boot();

    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }

  teams() {
    return this.belongsToMany('App/Models/Team').pivotModel(
      'App/Models/UserTeam'
    );
  }
}

module.exports = User;