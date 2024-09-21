const allRoles = {
  user: ['getClubs'],
  moderator: ['getClubs', 'manageClubs', 'getUsers'],
  admin: ['getUsers', 'manageUsers', 'addClub', 'getClubs', 'manageClubs'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
