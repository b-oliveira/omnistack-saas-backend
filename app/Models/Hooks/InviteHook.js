const User = use('App/Models/User');

class InviteHook {
  async sendInvitationEmail(invite) {
    const { email, team_id } = invite;

    const invited = await User.findBy('email', email);

    if (invited) {
      await invited.teams().attach(team_id);
    }
  }
}

module.exports = InviteHook;
