const Router = require('koa-router')
const { goAddItem, goTakeAllItem, goUpdateItem, goDeleteOneItem, goDeleteAllItem, goAddOneItem, goDecreaseOneItem } = require('../controller/cart.controller')
const CartRouter = new Router({ prefix: '/cart' })

CartRouter.post('/addItem', goAddItem)
CartRouter.get('/takeItem', goTakeAllItem)
CartRouter.put('/changeItem', goUpdateItem)
CartRouter.delete('/deleteItem', goDeleteOneItem)
CartRouter.delete('/deleteAll', goDeleteAllItem)
CartRouter.post('/addOne', goAddOneItem)
CartRouter.post('/decreaseOne', goDecreaseOneItem)

module.exports = CartRouter