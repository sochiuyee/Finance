<template>
    <panel :class="$style.panel">
        <section :class="$style.content">
            <div v-for="item in navs">
                <router-link :to="item.router" active-class="active">
                    <img :src="item.icon" alt="">
                    <p>{{item.text}}</p>
                </router-link>
            </div>
        </section>
    </panel>
</template>

<script>
    import Panel from "core/panel.vue"
    export default {
        name: "navbar",
        components:{
            Panel
        },
        created(){
            this.navs = [
                {
                    icon:'//img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90',
                    text:'首页',
                    router:'/home'
                },
                {
                    icon:'//img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60',
                    text:'赚钱',
                    router:'/manage'
                },
                {
                    icon:'//img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60',
                    text:'好物',
                    router:'/goods'
                },
                {
                    icon:'//img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60',
                    text:'金融会员',
                    router:'/my'
                }
            ]
        }
    }
</script>

<style module lang="scss">
    @import "~css/element";
    .panel{
        @include panel;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100px;
        &>h4,h2{
            display: none;
        }
        z-index: 100;
    }
    .content{
        @include flex(row);
        &>div{
            width: 25%;
            a{
                @include flex(column);
            }
            img{
                width: 44px;
                height: 44px;
                margin: 12px auto 6px;
            }
            p{
                font-size: 22px;
                text-align: center;
                color: #656565;
            }
        }
    }
</style>
