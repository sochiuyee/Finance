<template>
    <article>
        <slider v-if="sliderData" :loop="sliderData.length!==1">
            <a :href="item.link" v-for="item in sliderData">
                <img :src="item.img" alt="">
            </a>
        </slider>
        <section
            v-if="iconData"
            :class="$style.list">
            <div
                v-for="item in iconData"
                :key="item.iconImg"
                :class="$style.item">
                <div :class="$style.itemContent">
                    <router-link :to="item.link">
                        <img
                            :src="item.iconImg"
                            :alt="item.titleOne" >
                        <h4>{{ item.titleOne }}</h4>
                        <h6 v-if="item.titleTwo">{{ item.titleTwo }}</h6>
                    </router-link>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from "core/slider.vue";
import Loading from "public/loading.vue"

export default {
  name: "HomeSlider",
  components: {
    Slider,
    Loading
  },
  computed:{ // 在计算属性里获取放进vuex的数据
        iconData(){
            return this.$store.getters.homeIcon
        },
        sliderData(){
            return this.$store.getters.homeSlider
        }
    },
  created() {
    this.setData()
  },
  methods: {
      setData() {
        this.$store.dispatch('homeData')
      }
  }
};
</script>

<style lang="scss" module>
@import "~css/element";
.list {
  @include list(row);
  background: #fff;
  padding: 40px 0 20px;
}
.item {
    width: 33.3333%;
  font-size: 26px;
}
.itemContent {
  @include list(column);
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  img {
    width: 90px;
    height: 90px;
  }
  h4 {
    margin-top: 12px;
    color: #666;
    text-align: center;
  }
  h6 {
    margin-top: 12px;
  }
}

    .scroll{
        position: fixed;
        top: 90px;
        width: 100%;
    }
    .wrapper{

    }
</style>
