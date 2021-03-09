'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'mike@mike.com',
        username: 'Mike',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'john@john.com',
        username: 'John',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'bill@bill.com',
        username: 'Bill',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'stacey@stacey.com',
        username: 'Stacey',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'daniel@daniel.com',
        username: 'Danny',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'carol@carol.com',
        username: 'Carol',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'jamie@jamie.com',
        username: 'Jamie',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};