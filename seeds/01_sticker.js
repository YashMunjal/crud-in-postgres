const stickers = require('../seed_data/stickers');

exports.seed = function(knex, Promise) {
  return knex('sticker').del()
    .then(function () {
      return knex('sticker').insert(stickers);
    });
};