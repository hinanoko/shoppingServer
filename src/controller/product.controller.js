const { getFreshInfo, getBeverageInfo, getFrozenInfo, getHomeInfo, getPetFoodInfo, getSearchProduct } = require('../service/product.service')

class ProductController {
    async getFresh(ctx) {
        const freshData = await getFreshInfo()

        ctx.body = {
            code: 0,
            message: 'Data got successfully',
            data: freshData
        }
    }

    async getFrozen(ctx) {
        const frozenData = await getFrozenInfo()

        ctx.body = {
            code: 0,
            message: 'Data got successfully',
            data: frozenData
        }
    }

    async getHome(ctx) {
        const homeData = await getHomeInfo()

        ctx.body = {
            code: 0,
            message: 'Data got successfully',
            data: homeData
        }
    }

    async getBeverage(ctx) {
        const beverageData = await getBeverageInfo()

        ctx.body = {
            code: 0,
            message: 'Data got successfully',
            data: beverageData
        }
    }

    async getPetFood(ctx) {
        const petFoodData = await getPetFoodInfo()

        ctx.body = {
            code: 0,
            message: 'Data got successfully',
            data: petFoodData
        }
    }

    async getSearch(ctx) {
        const keyword = ctx.request.query.keyword
        const searchItem = await getSearchProduct(keyword)

        ctx.body = {
            code: 0,
            message: 'Data got successfully',
            data: searchItem
        }
    }
}

module.exports = new ProductController();