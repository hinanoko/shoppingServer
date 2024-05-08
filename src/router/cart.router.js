const Router = require('koa-router')
const { goAddItem, goTakeAllItem, goUpdateItem, goDeleteOneItem, goDeleteAllItem } = require('../controller/cart.controller')
const CartRouter = new Router({ prefix: '/cart' })

CartRouter.post('/addItem', goAddItem)
CartRouter.get('/takeItem', goTakeAllItem)
CartRouter.put('/changeItem', goUpdateItem)
CartRouter.delete('/deleteItem', goDeleteOneItem)
CartRouter.delete('/deleteAll', goDeleteAllItem)

module.exports = CartRouter