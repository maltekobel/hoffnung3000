module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [{
      createdAt: new Date,
      updatedAt: new Date,
      firstname: 'Boo Boo',
      lastname: 'Bamboo',
      password: '$2a$10$Loa5/JpAso9ZpVtL1EYrT.4CrFSkblu2nqtltJYyUF5qBd/E3Deru', // adminadmin
      email: 'admin@admin.com',
      isAdmin: true,
      isParticipant: false,
    }], {})
  },
  down: (queryInterface) => {
    queryInterface.bulkDelete('users', null, {})
  },
}
