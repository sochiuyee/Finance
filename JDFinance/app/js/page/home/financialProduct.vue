<template>
    <panel
        :class="$style.panel"
        title="理财精选">
        <section :class="$style.content">
            <!--需要跳转连接在dl外面套router-link-->
            <dl
                v-for="(item,index) in getHomeProduct"
                :class="$style.item"
                :key="item.title">
                <dt>{{ title[index] }}<span>{{ item.tagName }}</span></dt>
                <dd>{{ item.name }}</dd>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.discribe }}</dd>
            </dl>
        </section>
    </panel>
</template>

<script>
    import Panel from 'core/panel.vue'
    export default {
        name: "HomeProduct",
        components:{
            Panel
        },
        data(){
            return {
                title:['热销产品','小白理财','业绩推荐','中低风险']
            }
        },
        computed:{
            // 获取state里的数据
            getHomeProduct(){
                return this.$store.getters.homeFinancialProduct
            }
        },
        created(){
            this.getHomeHotProduct()
            this.getHomeFund()
            this.getHomeBound()
        },
        methods:{
            getHomeHotProduct(){
                // 触发Action
                this.$store.dispatch('homeHotProductData')
            },
            getHomeFund(){
                this.$store.dispatch('homeFundData')
            },
            getHomeBound(){
                this.$store.dispatch('homeBoundData')
            }
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";
    .panel{
        @include panel;
        >h2{
            display: none;
        }
        .content{
            @include flex(row);
            justify-content: space-around;
            box-sizing: border-box;
            &::after{ // 利用伪类添加横线
                content: "";
                display: block;
                width: 100%;
                height: 0;
                box-sizing: border-box;
                border-bottom: 1px solid #ddd;
                position: relative; // 根据自身移动
                top: -270px; // 把border-bottom的线移到中间
            }
            .item{
                position: relative;
                width: 50%;
                padding: 34px;
                box-sizing: border-box;
                &::after{
                    content: "";
                    width: 1px;
                    height: 136px;
                    display: block;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    margin-top: -68px; // 保持相对于item居中，值为负高度的一半
                    border-right: 2px solid #eee;
                }
                &:nth-child(2n){
                    &::after{
                        display: none;
                    }
                }
                dt{
                    font-weight: 700;
                    font-size: 36px;
                    width: 300px;
                    margin-bottom: 20px;
                    @include textHidden;
                    span{
                        vertical-align: 3px;
                        padding: 5px;
                        margin-left: 10px;
                        font-size: 24px;
                        color: #ff5155;
                        border: 1px solid #ff5155;
                    }
                }
                dd{
                    &:nth-child(2){
                        font-size: 30px;
                        line-height: 42px;
                        color: #333;
                        width: 265px;
                        @include textHidden;
                    }
                }
                dd{
                    &:nth-child(3){
                        font-weight: 700;
                        font-size: 44px;
                        height: 58px;
                        line-height: 58px;
                        color: #ff5155;
                        @include textHidden;
                    }
                    &:last-child{
                        font-size: 24px;
                        height: 34px;
                        line-height: 34px;
                        color: #999;
                        @include textHidden;
                    }
                }
            }
        }
    }
</style>
