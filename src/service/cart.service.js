const Cart = require('../model/cart.model')

class CartService {
    async updateItem(id, number) {
        const currentItem = await Cart.findOne({
            where: {
                product_id: id
            }
        });
        const currentNumber = currentItem.product_number;

        await Cart.update(
            { product_number: currentNumber + number },
            { where: { product_id: id } }
        );
    }

    async addNewItem(id, name, price, unit, number) {
        const addItemInfo = await Cart.create({
            product_id: id,
            product_name: name,
            unit_price: price,
            unit_quantity: unit,
            product_number: number
        })

        return addItemInfo
    }

    async takeAllItem() {
        const allItemInfo = await Cart.findAll()
        //console.log(allItemInfo)
        return allItemInfo
    }

    async deleteOneItem(id) {
        const deleteItemInfo = await Cart.destroy(
            {
                where: { product_id: id }
            }
        )

        return deleteItemInfo
    }

    async deleteAllItem() {
        const deleteAllInfo = await Cart.destroy({
            where: {},
            truncate: true // 将删除操作变为 truncate 操作，可以更有效地清空表格
        });

        return deleteAllInfo;
    }

    async addOneItem(id) {
        const currentItem = await Cart.findOne({
            where: {
                product_id: id
            }
        });
        const currentStock = currentItem.product_number;

        // 执行加一操作
        if (currentStock > 0) {
            const updatedStock = currentStock + 1;
            await Cart.update({ product_number: updatedStock }, { where: { product_id: id } });
            return { success: true, message: 'Item added successfully' };
        } else {
            return { success: false, message: 'Out of stock' };
        }
    }

    async decreaseOneItem(id) {
        const currentItem = await Cart.findOne({
            where: {
                product_id: id
            }
        });
        console.log(currentItem)
        const currentStock = currentItem.product_number;

        // 执行加一操作
        if (currentStock > 0) {
            const updatedStock = currentStock - 1;
            await Cart.update({ product_number: updatedStock }, { where: { product_id: id } });
            return { success: true, message: 'Item added successfully' };
        } else {
            return { success: false, message: 'Out of stock' };
        }
    }


}

module.exports = new CartService();