<template>
    <section ref="scroll">
        <slot></slot>
    </section>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "scroll",
        props:{
            probeType: { // 当 probeType 为 1 的时候，会非实时派发scroll 事件
                type: Number,
                default: 1
            },
            click: { // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件
                type: Boolean,
                default: true
            },
            scrollX:{
                type:Boolean,
                default:true
            },
            scrollY:{
                type:Boolean,
                default:true
            },
            // 是否监听滚动事件。例如推荐列表是不用监听滚动事件的
            listenScroll: {
                type: Boolean,
                default: false
            },
            mouseWheel: {
                type:Boolean,
                default:false
            },
            data: { // 当数据有发生变化时，需要监听数据变化更新better-scroll
                type: Array,
                default() {
                    return null
                }
            }
        },
        watch:{
            data(){
                setTimeout(()=>{
                    this.refresh()
                },20)
            }
        },
        mounted(){
            setTimeout(()=>{
                this._initScroll()
            },20) // 浏览器刷新间隔约14ms，确保DOM渲染完毕，初始化

            window.addEventListener('resize',()=>{
                if (!this.scroll){
                    return
                }
                this.refresh()
            })
        },
        methods:{
            _initScroll(){
                if (!this.$refs.scroll) {
                    return
                }
                this.scroll = new BScroll(this.$refs.scroll,{
                    probeType: this.probeType,
                    click: this.click,
                    scrollX: this.scrollX, // 开启横向滚动
                    scrollY: this.scrollY,
                    mouseWheel: this.mouseWheel
                })

                let me = this
                if (this.listenScroll) {
                    this.scroll.on('scroll',(pos)=>{
                        me.$emit('scroll',pos)
                    })

                    this.scroll.on('scrollEnd',(pos)=>{
                        me.$emit('scrollEnd',pos)
                    })
                }
            },
            refresh(){
                this.scroll && this.scroll.refresh()
            },
            scrollTo(){
                this.scroll&&this.scrollTo().apply(this.scroll,arguments)
            }
        }
    }
</script>
