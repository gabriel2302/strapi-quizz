'use strict';

/**
 * interaction controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::interaction.interaction', {
  async count(ctx) {
    var { query } = ctx.request
    const interactions = await strapi.db.connection.raw(` select count(quiz_id) as anshwered, quiz_id, q.title, fl.url, fl.alternative_text, round(cast(cast(sum(i2.correct_questions) as decimal) / sum(i2.total_questions) as decimal) * 100, 2) as percentage, cast(sum(i2.total_questions) as decimal), sum(i2.correct_questions)  from interactions_quiz_links i
    left join quizzes q on q.id = i.quiz_id
    left join files_related_morphs f on f.related_id = i.quiz_id and f.related_type = 'api::quiz.quiz'
    left join files fl on fl.id = f.file_id
    left join interactions i2 on i2.id = i.interaction_id
  group by quiz_id, q.id, fl.id order by count(quiz_id) desc limit 10;`)
    return interactions.rows
  }
});
