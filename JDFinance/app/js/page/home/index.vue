<template>
    <div class="home">
        <common-header></common-header>
        <home-slider></home-slider>
        <new-user></new-user>
        <financial-product></financial-product>
        <new-product></new-product>
        <life></life>
        <home-footer></home-footer>
    </div>
</template>

<script>
import CommonHeader from "./homeHeader.vue"
import HomeSlider from "./homeSlider.vue"
import NewUser from "./newUser.vue"
import FinancialProduct from "./financialProduct.vue"
import NewProduct from "./newProduct.vue"
import Life from "./life.vue"
import HomeFooter from "public/footer.vue"

export default {
  name: "Home",
  components: {
    CommonHeader,
    HomeSlider,
    NewUser,
    FinancialProduct,
    NewProduct,
    Life,
    HomeFooter
  }
};
</script>

