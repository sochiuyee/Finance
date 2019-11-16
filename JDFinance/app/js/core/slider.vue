<template>
    <section class="container">
        <div
            ref="slider"
            class="slider">
            <div class="slider-group" ref="sliderGroup">
                <slot></slot>
            </div>
        </div>
        <div class="dots" ref="dots">
            <span :class="{active: currentPageIndex === index }" class="dot" v-for="(item, index) in dots"></span>
        </div>
    </section>
</template>

<script>
    import BScroll from 'better-scroll'
    import {addClass} from '../methods/dom'

    export default {
        name: "PublicSlider",
        props: {
            loop: {
                type: Boolean,
                default: true
            },
            autoplay: {
                type: Boolean,
                default: true
            },
            interval: {
                type: Number,
                default: 4000
            },
        },
        data() {
            return {
                dots: [],
                currentPageIndex: 0
            }
        },
        // mounted是HTML挂载到页面完成后执行的事件钩子，确保better-scroll能够滑动
        mounted() {
            // 保证DOM成功渲染需要延时20ms,因为浏览器刷新是14ms一次
            setTimeout(()=>{
                this._setSliderWidth() // 如果开启无缝滚动，幻灯片总数量会多两张，与dots数量不一致，所以需要放在_initSlider之前
                this._initDots()
                this._initSlider()

                if (this.autoplay) {
                    this._play()
                }
            },20)

            window.addEventListener('resize',()=>{
                if (!this.slider){ // 没有实例化better-scroll，不做操作
                    return
                }
                this._setSliderWidth(true) // isResize标志位为true，窗口大小改变且开启无缝滚动都无需再重新复制两张幻灯片数量

                this.slider.refresh() // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
            })
        },
        destroyed() {
            clearTimeout(this.timer) // 当组件销毁时，需要手动清除定时器
        },
        methods:{
            _setSliderWidth(isResize){
                this.children = this.$refs.sliderGroup.children // 获取sliderGroup的子元素
                let width = 0

                // 获取幻灯片视口宽度
                let sliderWidth = this.$refs.slider.clientWidth

                for(let i = 0; i<this.children.length;i++){
                    let child = this.children[i]
                    addClass(child,'slider-item') // 给每张幻灯片都添加slider -item的className
                    // 一张幻灯片的宽度
                    child.style.width = sliderWidth + 'px'
                    // 总幻灯片长度
                    width += sliderWidth
                }
                if (this.loop&!isResize){
                    width += 2*sliderWidth // 开启无缝滚动需要复制一头一尾的幻灯片，长度要加2张幻灯片长度
                }
                // 设置幻灯片容器总长度
                this.$refs.sliderGroup.style.width = width + 'px'
            },
            _initDots(){
                this.dots = new Array(this.children.length) // 分页器点数的数量与幻灯片张数一致
                if (this.dots<2) {
                    this.$refs.dots.style.display = "none"
                }
            },
            _initSlider(){
                // better-scroll的配置 https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html
                this.slider = new BScroll(this.$refs.slider,{
                    scrollX:true,
                    scrollY:true,
                    momentum: false, // 当快速在屏幕上滑动一段距离的时候，会根据滑动的距离和时间计算出动量，并生成滚动动画
                    snap:{
                        loop:this.loop,
                        threshold: 0.3, // 可滚动到下一个的阈值(滑到30%就滚动到下一个)
                        speed: 400 // 轮播间隔
                    }
                })

                this.slider.on('scrollEnd',()=>{
                    let pageIndex = this.slider.getCurrentPage().pageX // 使用better-scroll的方法获取当前页面的index
                    this.currentPageIndex = pageIndex
                    if (this.autoplay) {
                        clearTimeout(this.timer) // 每次自动播放前清除前一次定时器再播放幻灯片
                        this._play()
                    }
                })
            },
            _play(){
                this.timer = setTimeout(()=>{
                    this.slider.next(400) // 滑动到下一张组件，动画时间与_initSlilder时的snap.speed一致
                },this.interval)
            },
            refresh(){
                this.slider && this.slider.refresh()
            }
        }
    };
</script>

<style lang="scss" scoped>
    .container{
        position: relative;
    }
    .slider{
        min-height: 1px;
        overflow: hidden;
    }
    .slider-group{
        position: relative;
        overflow: hidden;
        white-space: nowrap;
    }
    .slider-item{
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;

        // 对于幻灯片来说，在slot里有a标签和img标签放图片
        a{
            display: block;
            width: 100%;
            overflow: hidden;
        }

        img{
            display: block;
            width: 100%;
        }
    }

    .dots{
        position: absolute;
        right: 0;
        left: 0;
        bottom: 12px;
        text-align: center;
        font-size: 0;

        .dot{
            display: inline-block;
            margin: 0 4px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.5);

            &.active{
                width: 20px;
                border-radius: 5px;
                background-color: rgba(255, 255, 255, 0.8);
            }
        }
    }
</style>


