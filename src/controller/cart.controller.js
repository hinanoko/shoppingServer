const { addNewItem, takeAllItem, updateItem, deleteOneItem, deleteAllItem } = require('../service/cart.service')
const { deleteProduct } = require('../service/product.service')

class CartController {
    async goUpdateItem(ctx) {
        const cartItems = ctx.request.body;

        for (const item of cartItems) {
            console.log(item.name, item.id);
            await updateItem(item.product_id, item.product_number);
        }

        ctx.body = {
            success: true,
            message: 'Items changed to cart',
        };
    }

    async goAddItem(ctx) {
        const cartItems = ctx.request.body;

        for (const item of cartItems) {
            console.log(item.name, item.id);
            await addNewItem(item.id, item.name, item.price, item.unit, item.number);
        }

        ctx.status = 200;
        ctx.body = {
            success: true,
            message: 'Items added to cart',
        };
    }

    async goTakeAllItem(ctx) {
        const allItemRes = await takeAllItem();
        ctx.body = {
            allItemRes
        }
    }

    async goDeleteOneItem(ctx) {
        const id = ctx.request.query.product_id
        const deleteInfo = await deleteOneItem(id)
        ctx.body = {
            deleteInfo
        }
    }

    async goDeleteAllItem(ctx) {
        const allItemRes = await takeAllItem();
        for (const item of allItemRes) {
            const { product_id, product_number } = item;
            const id = parseInt(product_id.replace("ID", ""));
            console.log(id, product_number)
            const deleteInfo = await deleteProduct(id, product_number);
        }
        const deleteAllInfo = await deleteAllItem()
        ctx.body = {
            deleteAllInfo
        }
    }
}


module.exports = new CartController()