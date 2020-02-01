const Env = use('Env');

const User = use('App/Models/User');

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: Env.get('SEED_USER_NAME'),
      email: Env.get('SEED_USER_EMAIL'),
      password: Env.get('SEED_USER_PASSWORD'),
    });

    await user.teams().create({
      name: Env.get('SEED_TEAM_NAME'),
      user_id: user.id,
    });
  }
}

module.exports = DatabaseSeeder;
