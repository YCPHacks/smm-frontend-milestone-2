'use strict'
const fastify = require('fastify')();

const {getData} = require('../../utils/smm-list-data.js');

module.exports = async function (fastify, opts) {
    fastify.route({
        method: 'GET',
        url: '/',
        handler: async function (request, reply) {
            const data = {...await getData()};
            console.log(data);
            return reply.status(200).view('./pages/smm-list/index.pug', data);
        }
    })
}