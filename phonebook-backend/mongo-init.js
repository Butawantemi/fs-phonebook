/* global db */
const phonebookDb = db.getSiblingDB('phonebook')

phonebookDb.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'phonebook',
    },
  ],
})
