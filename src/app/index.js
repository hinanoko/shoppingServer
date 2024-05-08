const Koa = require('koa')

const app = new Koa()

const { koaBody } = require('koa-body')

const cors = require('@koa/cors')

const productRouter = require('../router/product.router')
const cartRouter = require('../router/cart.router')

app.use(cors())
app.use(koaBody())
app.use(productRouter.routes())
app.use(cartRouter.routes())

module.exports = app