import Slider from "../../../class/slider";
const homeSliderFunc = state => {
    if (Object.keys(state.home).length !==0){
        let arrSlider = []

        state.home[0].groupList[0].elementList.forEach(item=>{
            arrSlider.push(new Slider({
                img:item.eproductImgA,
                link:item.ejumpUrl
            }))
        })
        return arrSlider;
    }
}

const homeIconFunc = state => {
    if (Object.keys(state.home).length !== 0) {
        let arrIcon = []

        for (let i = 1; i < 3; i++) {
            for (let key of state.home[i].groupList[0].elementIconList[0]) {
                let url = key.ejumpUrl
                let id = key.eid
                let link = url + id
                // 把值push进数组，而不是指针
                arrIcon.push({iconImg: key.eproductImgA, titleOne: key.etitle1, titleTwo: key.etitle2, link: link})
            }
        }
        return arrIcon
    }
}

export {homeIconFunc,homeSliderFunc}
