import Slider from "../../../class/slider";

export const manageSliderFunc = state => {
    if (Object.keys(state.manageSlider).length !== 0) {
        let arrSlider = [];
        state.manageSlider.resultData.data.resultList[0].templateData.elementList.forEach(item => {
            arrSlider.push(new Slider({
                img: item.imgUrl,
                link: item.jumpData.jumpUrl
            }))
        })
        return arrSlider
    }
}
