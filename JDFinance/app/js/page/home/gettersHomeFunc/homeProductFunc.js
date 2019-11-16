import Product from "../../../class/product";

const homeProductFunc = state => {
    let arrProduct = []

    if (Object.keys(state.homeHotProduct).length !== 0) {
        arrProduct.push(new Product({
            name: state.homeHotProduct.todayHotProduct.productName,
            period: state.homeHotProduct.todayHotProduct.productPeriod,
            rate: state.homeHotProduct.todayHotProduct.productRate,
            discribe: state.homeHotProduct.todayHotProduct.productRateDiscribe,
            tagName: '今日爆品'
        }))
    }

    if (Object.keys(state.homeFund).length !== 0) {
        const pushIntoArr = (index) => {
            arrProduct.push(new Product(
                {
                    name: state.homeFund.fixedProductList[index].skuName,
                    period: state.homeFund.fixedProductList[index].productTerm,
                    rate: state.homeFund.fixedProductList[index].itemYield,
                    discribe: state.homeFund.fixedProductList[index].rateDesc,
                    tagName: '基金推荐'
                }
            ))
            return arrProduct
        }
        pushIntoArr(0)
        pushIntoArr(2)
    }

    if (Object.keys(state.homeBound).length !== 0) {

        arrProduct.push(new Product(
            {
                name: state.homeBound.fundNormalProductList[0].productName,
                period: state.homeBound.fundNormalProductList[0].productPeriod,
                rate: state.homeBound.fundNormalProductList[0].productRate,
                discribe: state.homeBound.fundNormalProductList[0].productRateDiscribe,
                tagName: '债券首选'
            }
        ))
    }
    return arrProduct
}

export {homeProductFunc}
