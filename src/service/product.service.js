const Product = require('../model/product.model')
const { Op } = require("sequelize");

class ProductService {
    async getFreshInfo() {
        const freshInfo = await Product.findAll(
            {
                where: {
                    product_id: [3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007]
                }
            }
        )

        //console.log(freshInfo)
        return freshInfo
    }

    async getBeverageInfo() {
        const beverageInfo = await Product.findAll(
            {
                where: {
                    product_id: [4000, 4001, 4002, 4003, 4004, 4005]
                }
            }
        )

        //console.log(beverageInfo)
        return beverageInfo
    }

    async getFrozenInfo() {
        const frozenInfo = await Product.findAll(
            {
                where: {
                    product_id: [1000, 1001, 1002, 1003, 1004, 1005]
                }
            }
        )

        //console.log(frozenInfo)
        return frozenInfo
    }

    async getHomeInfo() {
        const homeInfo = await Product.findAll(
            {
                where: {
                    product_id: [2000, 2001, 2002, 2003, 2004, 2005, 2006]
                }
            }
        )

        //console.log(homeInfo)
        return homeInfo
    }

    async getPetFoodInfo() {
        const petFoodInfo = await Product.findAll(
            {
                where: {
                    product_id: [5000, 5001, 5002, 5003, 5004]
                }
            }
        )

        //console.log(petFoodInfo)
        return petFoodInfo
    }

    async deleteProduct(id, number) {
        const currentItem = await Product.findOne({
            where: {
                product_id: id
            }
        });
        const currentNumber = currentItem.in_stock;
        //console.log(currentNumber, number, id)

        const deleteProductInfo = await Product.update(
            { in_stock: currentNumber - number },
            { where: { product_id: id } }
        )

        return deleteProductInfo
    }

    async getSearchProduct(name) {
        const searchItemInfo = await Product.findAll(
            {
                where: {
                    product_name: {
                        [Op.like]: `%${name}%`
                    }
                }
            }
        )
        return searchItemInfo
    }
}

module.exports = new ProductService();