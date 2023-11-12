'use strict'

const fp = require('fastify-plugin')
const path = require('path')

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/view'), {
    engine: {
      pug: require('pug'),
    },
    root: path.join(__dirname, '../views'),
  })
})
