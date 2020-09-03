const knex=require('../db/knex');

describe('CRUD Stickers', () => {
    before((done) => {
      knex.migrate.latest()
        .then(() => {
          return knex.seed.run();
        }).then(() => done());
    });