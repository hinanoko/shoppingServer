const Router = require('koa-router')
const { getFresh, getBeverage, getFrozen, getHome, getPetFood, getSearch } = require('../controller/product.controller')
const ProductRouter = new Router({ prefix: '/product' })

ProductRouter.get('/getFresh', getFresh)
ProductRouter.get('/getBeverage', getBeverage)
ProductRouter.get('/getFrozen', getFrozen)
ProductRouter.get('/getHome', getHome)
ProductRouter.get('/getPetFood', getPetFood)
ProductRouter.get('/search', getSearch)

module.exports = ProductRouter