class Team {
  async handle({ request, response, auth }, next) {
    const slug = request.header('TEAM');

    let team;

    if (slug)
      team = await auth.user
        .teams()
        .where('slug', slug)
        .first();

    if (!team) return response.status(401).send();

    auth.user.currentTeam = team.id;

    request.team = team;

    return next();
  }
}

module.exports = Team;
