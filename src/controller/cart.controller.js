const { addNewItem, takeAllItem, updateItem, deleteOneItem, deleteAllItem, addOneItem, decreaseOneItem } = require('../service/cart.service')
const { deleteProduct, getItemNumber } = require('../service/product.service')

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

    async goAddOneItem(ctx) {
        const productId = ctx.request.body.productId; // 假设前端传递了 productId

        // 获取当前库存数量
        const currentStock = await getItemNumber(productId);
        console.log('Current stock:', currentStock);

        if (currentStock > 0) {
            // 执行加一操作
            const addRes = await addOneItem(productId);
            if (addRes.success) {
                ctx.body = {
                    success: true,
                    message: addRes.message,
                    currentStock: currentStock + 1
                };
            } else {
                ctx.body = {
                    success: false,
                    message: addRes.message
                };
            }
        } else {
            ctx.body = {
                success: false,
                message: 'Out of stock'
            };
        }
    }

    async goDecreaseOneItem(ctx) {
        const productId = ctx.request.body.productId;

        const addRes = await decreaseOneItem(productId);

        if (addRes.success) {
            ctx.body = {
                success: true,
                message: addRes.message,
            };
        } else {
            ctx.body = {
                success: false,
                message: addRes.message
            };
        }
    }
}


module.exports = new CartController()