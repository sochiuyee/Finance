import Slider from "../../../class/slider";

export const manageWelfareFunc = state => {
    let welfare = {}
    if (Object.keys(state.manageWelfare).length !== 0) {
        let arrSlider = []
        state.manageWelfare.resultData.data.resultList[1].templateData.elementList.forEach(item => {
            arrSlider.push(new Slider({
                img: item.cardImg,
                link: item.jumpData.jumpUrl
            }))
        })
        welfare.slider = arrSlider

        welfare.title = {
            title: state.manageWelfare.resultData.data.resultList[0].templateData.elementList[0].titleCopy,
            rightImg: state.manageWelfare.resultData.data.resultList[0].templateData.elementList[0].rightImg,
            link: state.manageWelfare.resultData.data.resultList[0].templateData.elementList[0].jumpData
        }

        let arrTab = []
        state.manageWelfare.resultData.data.resultList[2].templateData.elementList[0].tabObj.forEach(item => {
            arrTab.push({
                text: item.tabText,
                redFlag: item.redFlag,
                link: item.jumpData.jumpUrl
            })
        })

        welfare.tabs = {
            headerText: state.manageWelfare.resultData.data.resultList[2].templateData.elementList[0].msgObj[0].msgTitle,
            buttonText: state.manageWelfare.resultData.data.resultList[2].templateData.elementList[0].msgObj[0].buttonTitle,
            buttonLink: state.manageWelfare.resultData.data.resultList[2].templateData.elementList[0].msgObj[0].jumpData.jumpUrl,
            icon: state.manageWelfare.resultData.data.resultList[2].templateData.elementList[0].msgicon,
            tab: arrTab
        }
    }
    return welfare
}
