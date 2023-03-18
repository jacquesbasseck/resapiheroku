'use strict';

/**
 * adhesion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::adhesion.adhesion');
