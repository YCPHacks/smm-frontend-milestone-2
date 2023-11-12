'use strict'
const { fetch } = require('undici');
const fastify = require('fastify')();


module.exports = async function (fastify, opts) {
    fastify.register(require('@fastify/formbody'))

    fastify.route({
        method: 'GET',
        url: '/',
        handler: async function (request, reply) {
            return reply.status(200).view('./pages/smm-create/index.pug');
        }
    })
    fastify.route({
        method: 'POST',
        url: '/',
        handler: async function (request, reply) {
            console.log(request.body);
            const result = await fetch(process.env.SMM_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request.body),
            }).then(res => res.json())
            .catch(err => console.log(err));
            console.log(result);
            reply.status(200).send(result)
        }
    })
}