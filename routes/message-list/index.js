'use strict'
const { fetch } = require('undici');
const fastify = require('fastify')();

const {getData} = require('../../utils/smm-list-data.js');
const {deleteData} = require('../../utils/smm-delete-data.js');

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

    fastify.route({
        method: 'DELETE',
        url: '/:id',
        handler: async function (request, reply) {
            const id = request.params.id;

            const result = {...await deleteData(id)};
            console.log(result);
            reply.redirect(303, '/message-list');
        }
    })
}