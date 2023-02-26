'use strict';

/**
 * interaction controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::interaction.interaction', {
  async count(ctx) {
    var { query } = ctx.request
    const interactions = await strapi.db.connection.raw("select count(quiz_id) as anshwered, quiz_id, q.title, fl.url from interactions_quiz_links i left join quizzes q on q.id = i.quiz_id left join files_related_morphs f on f.related_id = i.quiz_id and f.related_type = 'api::quiz.quiz' left join files fl on fl.id = f.file_id group by quiz_id, q.id, fl.id order by count(quiz_id) desc limit 10;")
    return interactions.rows
  }
});
