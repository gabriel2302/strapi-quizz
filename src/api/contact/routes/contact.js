'use strict';

/**
 * contact router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact.contact',{
  "routes": [
     {
       "method": "POST",
       "config": {
	 "policies": ["plugin::users-permissions.ratelimit"]
	}
     }]
});
