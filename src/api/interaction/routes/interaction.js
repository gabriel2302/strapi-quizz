'use strict';

/**
 * interaction router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::interaction.interaction', {
  async count(ctx) {
    var { query } = ctx.request
    const interactions = await strapi.db.connection.raw('select count(quiz), quiz from interaction group by quiz order by count(quiz) limit 10;')
    return interactions
  }
});
